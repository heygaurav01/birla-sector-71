import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <div className="text-center space-y-6 max-w-md mx-auto animate-fade-in">
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                </div>

                <h1 className="font-serif text-4xl font-bold text-foreground">
                    Thank You!
                </h1>

                <p className="text-lg text-muted-foreground">
                    Your submission has been received successfully. Our team will get back to you shortly.
                </p>

                <div className="pt-6">
                    <Link to="/">
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
