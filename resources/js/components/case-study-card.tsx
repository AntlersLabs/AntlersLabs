
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowRight, ArrowUpRightIcon } from "lucide-react";

const product = {
  name: "Red Hat",
  href: "#",

  price: "$28",
  category: "Clothing"
};

interface StudyProps{
    title?: string,
    href: string,
    image?: string,
    category?: string
}

export default function CaseStudyCard({title, href, image, category}: StudyProps) {
  return (

    <div className="w-[300px] group relative space-y-4">
      <figure className="group-hover:opacity-90">
        <img
          className="w-full rounded-lg aspect-square"
          src={image ?? "https://bundui-images.netlify.app/products/04.jpeg"}
          width={300}
          height={500}
          alt={title ?? "Antlers Labs"}
        />
      </figure>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg">
            <Link href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>

      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <ArrowUpRightIcon className="size-4" />
        </Button>
        <Button variant="outline" className="w-full">
          Read more
          <ArrowRight className="size-4 me-1" />
        </Button>
      </div>
    </div>
  );
}
