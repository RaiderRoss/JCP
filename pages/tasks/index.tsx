import DefaultLayout from "@/layouts/default";
import { Progress, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";

export default function TasksPage() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("Aidan");
  const [map, setMap] = useState(new Map<string, number>([
    ["Aidan", 0],
    ["Keagan", 0],
    ["Albie", 0],
    ["Cobus", 0],
  ]));
  const [progress, setProgress] = useState(0);

  const validateNumber = (num: number) => {
    if (isNaN(num)) {
      setErrorMessage("Input must be a number");
      return false;
    }
    if((map.get(name) ?? 0) >= 40){
      setErrorMessage("You already have the max hours");
      return false;
    }
    if (num <= 0) {
      setErrorMessage("Value must be bigger than 0");
      return false;
    }
    if (num >= 40) {
      setErrorMessage("Value must be less than 40");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const inputElement = event.target as HTMLInputElement;
      const num = parseFloat(inputElement.value);
      if (!validateNumber(num)) {
        setIsInvalid(true);
        return;
      }
      setIsInvalid(false);
      const updatedMap = new Map(map);
      updatedMap.set(name, (updatedMap.get(name) ?? 0) + num);
      setMap(updatedMap);
      setProgress(progress + num);
    }
    if (event.key === "Backspace" || event.key === "Delete") {
      setIsInvalid(false);
    }
  };

  const handleAvatarClick = (name: string) => {
    setName(name);
    console.log(name);
  }


  
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <p className="text-4xl mb-11">Tasks</p>

          <p className="text-4xl mb-8">Log Working hours here</p>
          <p className="text-2xl mb-8">Group progress</p>
          <Progress
            aria-label="Total group progress"
            size="md"
            maxValue={200}
            formatOptions={{ style: "decimal" }}
            value={progress}
            color="success"
            showValueLabel={true}
            className="max-w-md mb-8"
          />
          <p className="text-2xl mb-8">Current user : {name} </p>
          

          <AvatarGroup isBordered className="mb-8">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" onClick={() => handleAvatarClick("Aidan")} />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" onClick={() => handleAvatarClick("Albie")} />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" onClick={() => handleAvatarClick("Keagan")} />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" onClick={() => handleAvatarClick("Cobus")} />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" onClick={() => handleAvatarClick("MIA")} />
          </AvatarGroup>

          <Progress
            aria-label="Progress"
            size="md"
            maxValue={40}
            formatOptions={{ style: "decimal" }}
            value={map.get(name)}
            color="success"
            showValueLabel={true}
            className="max-w-md mb-8"
          />

          <br />
          <div className="py-11 resize-none">
            <Input
              isRequired
              label="Hours worked"
              defaultValue="1"
              onKeyDown={handleKeyPress}
              isInvalid={isInvalid}
              errorMessage={errorMessage}
              className="max-w-xs"
            />
          </div>
          <h2>This is the tasks page.</h2>
        </div>
      </section>
    </DefaultLayout>
  );
}


