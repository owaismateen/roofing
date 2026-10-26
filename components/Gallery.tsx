import React from "react";
import Image from "next/image";
import { GALLERY_PROJECTS } from "@/lib/data";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { ArrowRight, MapPin } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function Gallery() {
  const beforeAfterProjects = GALLERY_PROJECTS.filter((p) => p.isBeforeAfter);
  const standardProjects = GALLERY_PROJECTS.filter((p) => !p.isBeforeAfter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <span>Proven Craftsmanship</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            Project Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Take a look at finished roof systems across North Texas. Every roof built to endure 30+ years of severe weather.
          </p>
        </ScrollAnimationWrapper>

        {/* 2 Interactive Before & After Sliders */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-primary">
              Before & After Transformations
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beforeAfterProjects.map((project) => (
              <BeforeAfterSlider
                key={project.id}
                title={project.title}
                city={project.city}
                roofType={project.roofType}
                beforeImage={project.beforeImage || project.image}
                afterImage={project.afterImage || project.image}
              />
            ))}
          </div>
        </div>

        {/* Standard Finished Project Tiles (4 tiles to complete the 6 projects) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-primary">
              Recent Completed Roofs
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standardProjects.map((project, index) => (
              <ScrollAnimationWrapper
                key={project.id}
                delay={index * 0.08}
                className="group bg-surface-light rounded-[10px] overflow-hidden border border-gray-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Exterior Roof Photo Only - strictly no living things */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={`${project.roofType} in ${project.city}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-3 left-3 bg-white/95 text-primary text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] flex items-center gap-1 shadow-sm">
                    <MapPin className="w-3 h-3 text-accent" />
                    <span>{project.city}</span>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-heading text-lg font-bold uppercase text-primary leading-tight mb-1">
                    {project.roofType}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {project.highlight}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        {/* Action Button: "View All Projects" */}
        <ScrollAnimationWrapper className="mt-14 text-center">
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-accent hover:bg-accent-hover text-white font-heading font-black text-lg uppercase tracking-wider shadow-md hover:shadow-card-hover transition-all duration-200 active:scale-[0.98]"
          >
            <span>View All Projects & Request Estimate</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
