'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle2 } from 'lucide-react'

interface TestimonialProps {
  name: string;
  content: string;
}

const testimonials: TestimonialProps[] = [
    
  {
    name: "Sarah M.",
    content: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Emily R.",
    content: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
  },
  {
    name: "James L.",
    content: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
]

export default function TestimonialCards() {
  return (
    <div className=" flex items-center justify-center w-full max-w-md mx-auto space-y-6 p-4 gap-5">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="bg-white text-black">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 justify-items-center">
              <div className="flex gap-[50px]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-[#FFC633] stroke-[#FFC633]"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-xl">{testimonial.name}</span>
                  <CheckCircle2 className="w-6 h-6 text-[#01AB31]" />
                </div>
                <p className="text-base leading-[22px] text-black/60">
                  {testimonial.content}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

