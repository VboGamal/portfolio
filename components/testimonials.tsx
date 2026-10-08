"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Omar T.",
    role: "Startup Founder",
    quote: "يا ابني الشغل معاك فرق معانا جداً. الحملات بقت بتجيب نتائج حقيقية ومش مجرد أرقام على الفاضي، والأهم إن الـ 3D اللي بتعمله بينقل البراند في حتة تانية خالص.",
  },
  {
    name: "Abdelbary",
    role: "Abdelbary Photography",
    quote: "من أحسن الناس اللي مسكت لي الماركتنج. فاهم كويس إزاي يستهدف العميل الصح، والمبيعات عندي زادت بشكل ملحوظ من أول شهر شغل بينا. تسلم إيدك يا أحمد.",
  },
  {
    name: "Khaled E.",
    role: "E-commerce Store Owner",
    quote: "الفيديو الـ 3D اللي اتعمل للمنتج بتاعنا كسر الدنيا على تيك توك. دايماً بتعرف إزاي تطلع الفكرة بره الصندوق وتنفذها باحترافية عالية جداً، مفيش زيك بجد.",
  }
]

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial, i) => (
        <div key={i} className="group relative border border-foreground/15 bg-card p-8 transition-colors hover:border-primary">
          <Quote className="mb-6 size-8 text-foreground/10 transition-colors group-hover:text-primary/20" />
          <p className="mb-8 min-h-[120px] text-lg font-medium leading-relaxed text-foreground/80" dir="rtl">
            "{testimonial.quote}"
          </p>
          <div className="border-t border-foreground/10 pt-6 text-left">
            <h4 className="font-black tracking-tight">{testimonial.name}</h4>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
