import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface CustomAlertProps {
    message: string;
}

const CustomAlert = ({ message }: CustomAlertProps) => {
    return (
        <Alert variant="destructive">
            <AlertCircle className="h-8 w-5" />
            <AlertTitle className="text-lg">Error</AlertTitle>
            <AlertDescription className="text-base">{message}</AlertDescription>
        </Alert>
    );
};

export default CustomAlert;
