import { InputEvent, InvalidEvent, useCallback, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useTranslations } from "next-intl";

type FormInputProps = {
  id: string;
  isRequired?: boolean;
  isTextArea?: boolean;
  label: string;
  name: string;
  placeholder: string;
  type?: string;
};

export function InputField({
  id,
  isRequired = false,
  isTextArea = false,
  label,
  name,
  placeholder,
  type,
}: FormInputProps) {
  const [error, setError] = useState("");
  const t = useTranslations();

  const handleError = useCallback(
    (e: InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const field = e.currentTarget;
      field.setCustomValidity(" ");
      if (field.validity.valueMissing) {
        setError(t("generalMessages.required"));
      }
      if (field.validity.typeMismatch && field.type === "email") {
        setError(t("generalMessages.invalidEmail"));
      }
    },
    [t],
  );

  const resetError = useCallback(
    (e: InputEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const field = e.currentTarget;
      field.setCustomValidity("");
      setError("");
    },
    [],
  );

  if (isTextArea) {
    return (
      <>
        <Label htmlFor={name} className="text-sm font-medium text-ink-900">
          {label}
          {isRequired && "*"}
        </Label>
        <div>
          <Textarea
            id={id}
            name={name}
            placeholder={placeholder}
            rows={5}
            required={isRequired}
            onInvalid={handleError}
            onInput={resetError}
            className="resize-none field-sizing-fixed rounded-xl border-brand-200 bg-brand-50/60 focus-visible:ring-brand-500"
          />
          <div className="h-4 text-sm text-red-500 p-1">{error}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Label htmlFor={name} className="text-sm font-medium text-ink-900">
        {label}
        {isRequired && "*"}
      </Label>
      <div>
        <Input
          className="rounded-xl border-brand-200 bg-brand-50/60 focus-visible:ring-brand-500"
          id={id}
          name={name}
          onInput={resetError}
          onInvalid={handleError}
          placeholder={placeholder}
          required={isRequired}
          type={type}
        />
        <div className="h-4 text-sm text-red-500 py-1">{error}</div>
      </div>
    </>
  );
}
