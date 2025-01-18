import { useState } from "react";
import { z } from "zod";

function ValidateTask({
  title,
  description,
  onValidationError,
  onValidationSuccess,
}: {
  title: string;
  description: string;
  onValidationSuccess: () => void;
  onValidationError: (errors: { title: string; description: string }) => void;
}) {
  const [errors, setErrors] = useState({ title: "", description: "" });
  const taskSchema = z.object({
    title: z
      .string()
      .min(5, "Title must be at least 5 characters")
      .max(20, "Title must be at most 20 characters")
      .nonempty("Title is required"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters")
      .max(255, "Description must be at most 255 characters")
      .nonempty("Description is required"),
  });

  const validate = () => {
    const result = taskSchema.safeParse({ title, description });

    if (result.success) {
      setErrors({ title: "", description: "" });
      onValidationSuccess();
    } else {
      const fieldErrors = result.error.flatten().fieldErrors;
      const validationErrors = {
        title: fieldErrors.title ? fieldErrors.title[0] : "",
        description: fieldErrors.description ? fieldErrors.description[0] : "",
      };
      setErrors(validationErrors);
      onValidationError(validationErrors);
    }
  };

  return {
    errors,
    validate,
    onValidationError,
    onValidationSuccess,
  }
};

export default ValidateTask;