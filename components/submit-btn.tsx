import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn-primary group w-full disabled:opacity-60 sm:w-auto" disabled={pending}>
      {pending ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-label="Sending" />
      ) : (
        <>
          Send message
          <FaPaperPlane
            className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </>
      )}
    </button>
  );
}
