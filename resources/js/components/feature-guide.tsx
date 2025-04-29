import { ArrowDownRight } from "lucide-react";


import { Button } from "@/components/ui/button";
import { HoverCards } from "./hover-card";

interface Hero3Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
    rating?: number;
  };
}

const FeatureGuide = ({
  heading = "Our hand carfted solution will help your business grow",
  description = "Antlers Labs is dedicated to meet their cliet's expactions at any cost, at Antlers Labs we belived no dream is impossible",
  buttons = {
    primary: {
      text: "Sign Up",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
  },

}: Hero3Props) => {
  return (
    <section>
      <div className="container grid items-center gap-10 p-10 lg:grid-cols-2 lg:gap-20">
        <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl xl:text-7xl bg-gradient-to-r bg-blue-600 to-red-400 bg-clip-text text-transparent">
            {heading}
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            {description}
          </p>
          <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">


          </div>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <Button asChild className="w-full sm:w-auto">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons.secondary && (
              <Button asChild variant="outline">
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowDownRight className="size-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="hidden md:block">
            <HoverCards />
        </div>
      </div>
    </section>
  );
};

export { FeatureGuide };
