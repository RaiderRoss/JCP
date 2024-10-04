import { useRouter } from "next/router";
import DefaultLayout from "@/layouts/default";
import { urgencies } from "../../public/data";
import { supportType } from "../../public/data";
import { markProblems } from "../../public/data";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
export default function SupportTypePage() {
  const router = useRouter();
  const { type } = router.query;

  const supportTypeKeys = supportType.map((item) => item.key);

  const handleType = useCallback(() => {
    if (typeof type === "string" && !supportTypeKeys.includes(type)) {
      router.push(`../support`);
    }
  }, [type, supportTypeKeys, router]);

  useEffect(() => {
    handleType();
  }, [handleType]);

  const [selectedUrgency, setSelectedUrgency] = useState("");

  const getColour = (urgency: string) => {
    switch (urgency) {
      case "notUrgent":
        return "success";
      case "low":
        return "primary";
      case "normal":
        return "warning";
      case "critical":
        return "danger";
      default:
        return "default";
    }
  };

  const marginBottom = "mb-8";

  const sendEmail = async () => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `Mr AR McKenzie`,
          details: `Type of ticket created : ${type}` + ` At` + new Date().toLocaleString(),
          urgency: selectedUrgency,
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error sending email:', error);
    }

  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleClose = () => {
    sendEmail();
    router.push(`../support`);
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className={`self-start text-1xl mb-2 ml-40`}>
          <Link href="/support">Support Home</Link> &gt; <span>{type}</span>
        </div>
        <div className={`inline-block max-w-lg text-center justify-center w-96 gap-y-10 ${marginBottom}`}>
          {type === "funding" && (
            <>
              <h2 className={marginBottom}>Budget Support Ticket</h2>
              <Textarea
                isRequired
                label="What is the issue you are facing"
                labelPlacement="outside"
                radius="none"
                placeholder="Please provide a detailed description of the issue you are facing here"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[100px] w-full",
                }}
              />
              <Textarea
                label="What have you tried to solve the issue"
                labelPlacement="outside"
                radius="none"
                placeholder="Please provide a detailed description of what you have tried to solve the issue here (if applicable)"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[70px] w-full",
                }}
              />
            </>
          )}

          {type === "markQuery" && (
            <>
              <h2 className={marginBottom}>Mark Support Ticket</h2>
              <Select
                labelPlacement="outside"
                label="Mark Issue type"
                placeholder=""
                variant="underlined"
                className={`max-w-4xl items-center justify-center ${marginBottom}`}
              >
                {markProblems.map((markProblem) => (
                  <SelectItem key={markProblem.key}>{markProblem.label}</SelectItem>
                ))}
              </Select>
              <Textarea
                isRequired
                label="Which mark are you having issues with"
                labelPlacement="outside"
                radius="none"
                placeholder="Please name the mark you are having issues with"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[100px] w-full",
                }}
              />
            </>
          )}
          {type === "communityPartner" && (
            <>
              <h2 className={marginBottom}>Community Partner Support</h2>
              <Textarea
                isRequired
                label="Who is your community partner"
                labelPlacement="outside"
                radius="none"
                placeholder="Please only provide the name of your community partner"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[100px] w-full",
                }}
              />
              <Textarea
                label="What is the issue you are facing"
                labelPlacement="outside"
                radius="none"
                placeholder="Please provide a detailed description of the issue you are facing here"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[100px] w-full",
                }}
              />
              <Textarea
                label="What have you tried to solve the issue"
                labelPlacement="outside"
                radius="none"
                placeholder="Please provide a detailed description of what you have tried to solve the issue here (if applicable)"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[70px] w-full",
                }}
              />
            </>
          )}
          {type === "group" && (
            <>
              <h2 className={marginBottom}>Group Problem Support Ticket</h2>
              <Input
                isRequired
                label="Please provide your current group number"
                defaultValue="1"
                className={`max-w-xs ${marginBottom}`}
              />
              <Textarea
                isRequired
                label="Current issue with the group: "
                labelPlacement="outside"
                radius="none"
                placeholder="Please provide a detailed description of the issue you are facing here"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[100px] w-full",
                }}
              />
              <Textarea
                isRequired
                label="Please list the members of your group"
                labelPlacement="outside"
                radius="none"
                placeholder="List student names and student numbers                         eg. John Doe 12345678"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[70px] w-full",
                }}
              />
            </>
          )}

          <Select
            labelPlacement="outside"
            color={getColour(selectedUrgency)}
            label="Support urgency"
            placeholder=""
            selectedKeys={[selectedUrgency]}
            variant="underlined"

            onSelectionChange={(selected) =>
              setSelectedUrgency(selected.currentKey ?? "")
            }
            className={`max-w-4xl items-center justify-center ${marginBottom}`}
          >
            {urgencies.map((urgency) => (
              <SelectItem key={urgency.key}>{urgency.label}</SelectItem>
            ))}
          </Select>
          <Button color="danger" radius="none" onPress={onOpen}>
            Submit support ticket
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}
           classNames={{
            body: "py-6",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-80",
            base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
            header: "border-b-[1px] border-[#292f46]",
            footer: "border-t-[1px] border-[#292f46]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }} 
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Support Ticket</ModalHeader>
                  <ModalBody>
                    <p>
                      You just successfully submitted a support ticket.
                    </p>
                    <p>
                      Please allow 24 hours for a response if critical, otherwise
                      we will get back to you as soon as possible.
                    </p>

                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={() => { onClose(), handleClose() }}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </section>
    </DefaultLayout>
  );
}
