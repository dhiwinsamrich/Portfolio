import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { testimonials } from "../../data/testimonials";

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const startAutoScroll = () => {
      timeoutId = setTimeout(() => {
        const currentIndex = api.selectedScrollSnap();
        const totalSlides = api.scrollSnapList().length;
        
        if (currentIndex + 1 >= totalSlides) {
          api.scrollTo(0);
        } else {
          api.scrollNext();
        }
      }, 4000);
    };

    startAutoScroll();

    // Restart auto-scroll when slide changes
    const onSelect = () => {
      clearTimeout(timeoutId);
      startAutoScroll();
    };

    api.on("select", onSelect);

    return () => {
      clearTimeout(timeoutId);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full bg-background py-2 lg:py-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left text-foreground">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem className="lg:basis-1/2" key={testimonial.id}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {testimonial.title}
                        </h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          {testimonial.description}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <span>{testimonial.author}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Testimonials };

