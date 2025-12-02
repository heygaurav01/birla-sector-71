import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { submitFormData } from "@/lib/api";

interface EnquiryModalProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const EnquiryModal = ({
  children,
  title = "Pre-Register for Best Offers",
  description = "Get exclusive pricing and floor plans",
}: EnquiryModalProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitFormData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        countryCode: "+91",
      });

      if (response.success) {
        toast({
          title: "Thank you for your interest!",
          description: response.message,
        });
        setFormData({ name: "", email: "", phone: "" });
        setOpen(false);
        navigate("/thank-you.html");
      } else {
        toast({
          title: "Error",
          description: response.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="modal-name">Name *</Label>
            <Input
              id="modal-name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="modal-phone">Mobile No *</Label>
            <Input
              id="modal-phone"
              type="tel"
              placeholder="Enter your mobile number"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setFormData({ ...formData, phone: value });
              }}
              required
              maxLength={10}
              pattern="[0-9]{10}"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="modal-email">Email (Optional)</Label>
            <Input
              id="modal-email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-1"
            />
          </div>



          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Free Cab Facility For Site Visit
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryModal;
