import { addToast } from "@heroui/react";

const defaultVariant: "bordered" | "flat" | "solid" = "bordered";

export const showSuccess = (message: string) => {
  addToast({
    title: "Berjaya",
    description: message,
    color: "success",
    variant: defaultVariant,
  });
};

export const showError = (message: string) => {
  addToast({
    title: "Ralat",
    description: message,
    color: "danger",
  });
};

export const showInfo = (message: string) => {
  addToast({
    title: "Makluman",
    description: message,
    color: "primary",
  });
};
