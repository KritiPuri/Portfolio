"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Award } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ExperienceCard = motion.div;

const ExperienceLayout = ({
  role,
  company,
  period,
  certificate,
  description,
  techStack,
}) => {
  return (
    <ExperienceCard
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full relative rounded-lg overflow-hidden p-6 md:p-8 custom-bg border border-accent/20 hover:border-accent/50 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-accent mb-2">
            {role}
          </h2>
          <h3 className="text-lg md:text-xl text-foreground font-semibold">
            {company}
          </h3>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2">
          <span className="text-sm md:text-base text-muted font-medium bg-accent/10 px-3 py-1 rounded-full">
            {period}
          </span>
          {certificate && certificate !== "#" && (
            <Link
              href={certificate}
              target="_blank"
              className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <Award className="w-4 h-4" />
              <span>Certificate</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li
              key={index}
              className="text-sm md:text-base text-foreground/90 flex gap-2"
            >
              <span className="text-accent mt-1.5">•</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="pt-4 border-t border-muted/20">
        <p className="text-xs md:text-sm text-muted">
          <span className="font-semibold text-accent">Tech Stack: </span>
          {techStack}
        </p>
      </div>
    </ExperienceCard>
  );
};

export default ExperienceLayout;
