import * as React from "react";
import { format } from "date-fns";
import {
  CalendarDays,
  CalendarIcon,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  Phone,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type BookAppointmentDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type Step = "slot" | "details" | "success";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

async function sendEmailViaEmailJs(params: {
  toEmail: string;
  fullName: string;
  phone: string;
  brief: string;
  dateLabel: string;
  timeLabel: string;
}) {
  const res = await fetch("/api/book-consultation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      toEmail: params.toEmail,
      fullName: params.fullName,
      phone: params.phone,
      brief: params.brief,
      dateLabel: params.dateLabel,
      timeLabel: params.timeLabel,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Failed to send email: ${res.status} ${res.statusText}${text ? ` - ${text}` : ""}`,
    );
  }
}

const TIME_OPTIONS = [
  "09:00 AM",
  "09:30 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:30 PM",
];

export default function BookAppointmentDialog({
  open,
  onOpenChange,
}: BookAppointmentDialogProps) {
  const [step, setStep] = React.useState<Step>("slot");

  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    undefined,
  );
  const [selectedTime, setSelectedTime] = React.useState<string>("");

  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [brief, setBrief] = React.useState("");

  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!open) {
      setStep("slot");
      setSelectedDate(undefined);
      setSelectedTime("");
      setFullName("");
      setEmail("");
      setPhone("");
      setBrief("");
      setSubmitting(false);
      setSubmitError(null);
    }
  }, [open]);

  const step1Valid = Boolean(selectedDate) && Boolean(selectedTime);
  const step2Valid =
    Boolean(fullName.trim()) &&
    isValidEmail(email) &&
    Boolean(phone.trim()) &&
    !submitting;

  const dateLabel = selectedDate ? format(selectedDate, "MMMM dd, yyyy") : "";

  const close = () => onOpenChange(false);

  const onContinue = async () => {
    if (step === "slot") {
      if (!step1Valid) return;
      setStep("details");
      return;
    }

    if (step === "details") {
      if (!step2Valid || !selectedDate || !selectedTime) return;
      setSubmitting(true);
      setSubmitError(null);
      try {
        await sendEmailViaEmailJs({
          toEmail: email.trim(),
          fullName: fullName.trim(),
          phone: phone.trim(),
          brief: brief.trim(),
          dateLabel,
          timeLabel: selectedTime,
        });
        setStep("success");
      } catch (e) {
        setSubmitError(e instanceof Error ? e.message : "Failed to send email");
      } finally {
        setSubmitting(false);
      }
    }
  };

  const primaryButtonEnabled =
    (step === "slot" && step1Valid) || (step === "details" && step2Valid);

  const primaryButtonLabel =
    step === "success" ? "Close" : submitting ? "Sending..." : "Continue";

  const onPrimary = async () => {
    if (step === "success") {
      close();
      return;
    }

    await onContinue();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white sm:max-w-[760px] p-0 gap-0">
        <div className="px-8 pt-6 pb-4">
          {step !== "success" ? (
            <DialogHeader className="text-left">
              <DialogTitle className="text-[#090909] text-[18px] font-semibold">
                Book Your Appointment
              </DialogTitle>
              <DialogDescription className="text-[12px] text-[#6B7280]">
                {step === "slot" && "Please select a date and time to continue."}
                {step === "details" &&
                  "We'll send confirmation to your email and WhatsApp."}
              </DialogDescription>
            </DialogHeader>
          ) : (
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center size-12 rounded-full bg-[#EAFBF0]">
                <CheckCircle2 className="size-7 text-[#22C55E]" />
              </div>
              <div className="mt-4 text-[18px] font-semibold text-[#111827]">
                Booking Confirmed!
              </div>
              <div className="mt-1 text-[12px] text-[#6B7280]">
                Your appointment has been successfully scheduled
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-[#E5E7EB]" />

        <div className="px-8 py-6">
          {step === "slot" && (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label className="text-[#090909] text-[12px]">Select a date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="w-full h-10 px-3 rounded-[6px] border border-[#E5E7EB] flex items-center justify-between text-[13px] text-[#111827]"
                    >
                      <span className={selectedDate ? "" : "text-[#9CA3AF]"}>
                        {selectedDate ? dateLabel : "Select a date"}
                      </span>
                      <CalendarIcon className="size-4 text-[#6B7280]" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 w-auto" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(d) => setSelectedDate(d ?? undefined)}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-[#090909] text-[12px]">Select a time</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger className="h-10 rounded-[6px] border-[#E5E7EB]">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_OPTIONS.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="text-[11px] text-[#6B7280]">
                  Only available time will be shown in the list.
                </div>
              </div>
            </div>
          )}

          {step === "details" && (
            <div className="flex flex-col gap-4">
              <div className="mt-1 flex items-center gap-4 text-[13px] text-[#111827]">
                <div className="flex items-center gap-2 font-medium">
                  <CalendarDays className="size-4 text-[#FE67C5]" />
                  <span>{dateLabel}</span>
                </div>

                <div className="flex items-center gap-2 font-medium">
                  <Clock className="size-4 text-[#FE67C5]" />
                  <span>{selectedTime}</span>
                </div>
              </div>

              <div className="border-t border-[#E5E7EB]" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label className="text-[#090909] text-[12px]">
                    Full name
                    <span className="text-[#EF4444]">*</span>
                  </Label>
                  <Input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="h-10 rounded-[6px] border border-[#E5E7EB] background-white"
                    style={{ background: "white" }}
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label className="text-[#090909] text-[12px]">
                    Email Address
                    <span className="text-[#EF4444]">*</span>
                  </Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    type="email"
                    className="h-10 rounded-[6px] border border-[#E5E7EB]"
                    style={{ background: "white" }}
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label className="text-[#090909] text-[12px]">
                    Phone Number
                    <span className="text-[#EF4444]">*</span>
                  </Label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="h-10 rounded-[6px] border border-[#E5E7EB]"
                    style={{ background: "white" }}
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label className="text-[#090909] text-[12px]">Brief information</Label>
                  <Textarea
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Tell us a little about what you're looking for"
                    className="min-h-[120px] rounded-[6px] border border-[#E5E7EB]"
                    style={{ background: "white" }}
                  />
                </div>
              </div>

              {submitError && (
                <div className="text-[12px] text-[#DC2626]">{submitError}</div>
              )}
            </div>
          )}

          {step === "success" && (
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[520px] flex flex-col gap-4 text-left">
                <div className="rounded-[10px] border border-[#E5E7EB] bg-white p-4">
                  <div className="text-[12px] font-semibold text-[#111827]">
                    Confirmation Sent To
                  </div>
                  <div className="mt-1 text-[11px] text-[#6B7280]">
                    Enter your email below to login to your account
                  </div>

                  <div className="mt-4 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-[2px] flex items-center justify-center size-8 rounded-[8px] bg-[#F3F4F6]">
                        <Mail className="size-4 text-[#111827]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] text-[#6B7280]">Email</div>
                        <div className="text-[12px] font-medium text-[#111827]">
                          {email.trim()}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-[2px] flex items-center justify-center size-8 rounded-[8px] bg-[#F3F4F6]">
                        <Phone className="size-4 text-[#111827]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] text-[#6B7280]">Phone Number</div>
                        <div className="text-[12px] font-medium text-[#111827]">
                          {phone.trim()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[10px] border border-[#E5E7EB] bg-white p-4">
                  <div className="text-[12px] font-semibold text-[#111827]">
                    Appointment Details
                  </div>
                  <div className="mt-1 text-[11px] text-[#6B7280]">
                    Enter your email below to login to your account
                  </div>

                  <div className="mt-4 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-[2px] flex items-center justify-center size-8 rounded-[8px] bg-[#EEF2FF]">
                        <CalendarDays className="size-4 text-[#4F46E5]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] text-[#6B7280]">Date</div>
                        <div className="text-[12px] font-medium text-[#111827]">
                          {dateLabel}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-[2px] flex items-center justify-center size-8 rounded-[8px] bg-[#EEF2FF]">
                        <Clock className="size-4 text-[#4F46E5]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] text-[#6B7280]">Time</div>
                        <div className="text-[12px] font-medium text-[#111827]">
                          {selectedTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-[#E5E7EB] pt-3">
                    <div className="text-[11px] text-[#6B7280]">Booked by</div>
                    <div className="text-[12px] font-medium text-[#111827]">
                      {fullName.trim()}
                    </div>
                  </div>
                </div>

                <div className="rounded-[8px] border border-[#FDE68A] bg-[#FFFBEB] px-4 py-3 text-[11px] text-[#6B7280]">
                  <span className="font-medium text-[#111827]">Note:</span> Please
                  arrive 5 minutes before your scheduled time. If you need to
                  reschedule, contact us at least 24 hours in advance.
                </div>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="px-8 pb-6 pt-2 sm:flex-row sm:justify-end sm:gap-3">
          {step !== "success" && (
              <button
                  type="button"
                  onClick={() => {
                    close();
                  }}
                  className="
    h-9 px-5 rounded-[6px] border border-[#E5E7EB] text-[12px] text-[#111827]
    transition-all duration-200
    hover:text-white
    hover:bg-gradient-to-r hover:from-[#FE67C5] hover:to-[#983E76]
  "
                  disabled={submitting}
              >
                Cancel
              </button>

          )}

          <button
              type="button"
              onClick={onPrimary}
              disabled={step !== "success" && !primaryButtonEnabled}
              className={`
    h-9 px-6 rounded-[6px] text-[12px] flex items-center justify-center
    transition-all duration-200
    ${step === "success"
                  ? "border border-[#E5E7EB] text-[#111827] hover:text-white hover:bg-gradient-to-r hover:from-[#FE67C5] hover:to-[#983E76]"
                  : "text-white"}
    ${!primaryButtonEnabled ? "opacity-70 cursor-not-allowed" : ""}
  `}
              style={{
                minWidth: 110,
                ...(step !== "success" && primaryButtonEnabled
                    ? {
                      backgroundImage: "linear-gradient(129.33deg, #FE67C5 12.21%, #983E76 126.73%)",
                    }
                    : step !== "success"
                        ? { backgroundColor: "#E5D3DE" }
                        : {}),
              }}
          >
            {submitting && <Loader2 className="mr-2 size-4 animate-spin" />}
            {primaryButtonLabel}
          </button>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
