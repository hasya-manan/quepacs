import { Button } from "@heroui/react";
import { showSuccess, showError, showInfo } from "@/utils/toast";

export default function TestButton() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold mb-4">Test button</h1>

      <Button
        color="success"
        variant="bordered"
        onPress={() => showSuccess("Toast berjaya dipaparkan!")}
      >
        Show Success Toast
      </Button>

      <Button
        color="danger"
        variant="bordered"
        onPress={() => showError("Toast ralat dipaparkan!")}
      >
        Show Error Toast
      </Button>

      <Button
        color="primary"
        variant="bordered"
        onPress={() => showInfo("Toast makluman dipaparkan!")}
      >
        Show Info Toast
      </Button>
    </div>
  );
}
