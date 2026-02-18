"use client";

import SlideWrapper from "@/components/SlideWrapper";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ────────────────────────────────────────────
   Avatar — photo with company-colored border,
   falls back to initials if no imageUrl
   ──────────────────────────────────────────── */

function Avatar({
  name,
  role,
  imageUrl,
  company,
}: {
  name: string;
  role: string;
  imageUrl?: string;
  company?: string;
}) {
  const isMC = company === "marinachain";
  const borderColor = isMC ? "border-[#0066CC]" : "border-emerald";

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={name}
        className={`w-20 h-20 rounded-full object-cover border-2 ${borderColor}`}
      />
    );
  }

  // Fallback: initial-based avatar
  const isBlue =
    role.includes("CEO") ||
    role.includes("COO") ||
    role.includes("Co-Founder");
  const bgColor = isBlue ? "bg-verdaxis-blue/15" : "bg-gold-accent/15";
  const fallbackBorder = isBlue
    ? "border-verdaxis-blue/30"
    : "border-gold-accent/30";
  const textColor = isBlue ? "text-verdaxis-blue" : "text-gold-accent";

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`w-20 h-20 rounded-full ${bgColor} border-2 ${fallbackBorder} flex items-center justify-center`}
    >
      <span
        className={`font-heading text-lg font-bold ${textColor} select-none`}
      >
        {initials}
      </span>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main component
   ──────────────────────────────────────────── */

export default function SlideTeam() {
  const t = useContent();
  const { heading, subtitle, members } = t.team;

  return (
    <SlideWrapper>
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* ── Heading ── */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-2"
            variants={fadeInUp}
          >
            <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              {heading}
            </h2>
          </motion.div>
          <motion.p
            className="text-white/50 text-base md:text-lg ml-[16px] max-w-2xl"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* ── Team grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
          variants={staggerContainer}
        >
          {members.map((member) => {
            const isMC = member.company === "marinachain";
            const gradientBorder = isMC
              ? "from-[#0066CC] via-[#0066CC]/60 to-verdaxis-blue"
              : "from-emerald via-emerald/60 to-gold-accent";
            const hoverShadow = isMC
              ? "hover:shadow-[0_0_30px_rgba(0,102,204,0.08)]"
              : "hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]";
            const glowColor = isMC
              ? "rgba(0,102,204,0.06)"
              : "rgba(16,185,129,0.06)";

            return (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className={`group relative flex flex-col items-center text-center
                  rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md
                  px-5 py-7
                  transition-all duration-300
                  hover:border-white/20 hover:bg-white/[0.06]
                  hover:-translate-y-1 ${hoverShadow}`}
              >
                {/* Gradient top border */}
                <div className={`absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r ${gradientBorder}`} />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 20%, ${glowColor} 0%, transparent 70%)`,
                  }}
                  aria-hidden
                />

                {/* Avatar */}
                <div className="relative mb-4">
                  <Avatar
                    name={member.name}
                    role={member.role}
                    imageUrl={member.imageUrl}
                    company={member.company}
                  />
                </div>

                {/* Name */}
                <h3 className="font-heading text-base font-bold text-white mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <span className="text-sm font-heading font-medium text-verdaxis-blue mb-3">
                  {member.role}
                </span>

                {/* Company logo */}
                {member.company && (
                  <div className="flex items-center gap-1.5 mt-1 mb-3">
                    {member.company === "marinachain" && (
                      <img
                        src="/images/logos/partners/marinachain-white.png"
                        alt="MarinaChain"
                        className="h-4 opacity-50"
                      />
                    )}
                    {member.company === "greenm" && (
                      <img
                        src="/images/logos/partners/greenm-square.png"
                        alt="Green Marine"
                        className="h-4 opacity-50 rounded-sm"
                      />
                    )}
                  </div>
                )}

                {/* Bio */}
                <p className="text-xs text-white/50 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </SlideWrapper>
  );
}
