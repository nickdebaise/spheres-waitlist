import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Coming soon!</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/spheres.png"
        alt="logo"
        className="mx-auto h-24 w-24"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-bold tracking-tighter sm:text-5xl"
          text="Your Personal Network, Supercharged."
          duration={0.6}
        />
      </motion.div>


      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[35rem] pt-3 pb-1 text-center text-lg text-zinc-600 mt-8"
          text="Most students and young professionals struggle with what comes after the first connection. Spheres helps you build, grow, and maintain meaningful relationships – without the guesswork."
          duration={0.75}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="mx-auto max-w-[33rem] pt-2 pb-1">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span className="text-zinc-600">Know who to reach out to</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span className="text-zinc-600">Get AI-generated follow-up messages</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span className="text-zinc-600">Stay on track with smart reminders</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span className="text-zinc-600">Align networking with your career goals</span>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[27rem] pt-3 text-center text-lg font-normal italic mt-8"
          text="42% of students without internships feel low confidence in their networking skills."
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}