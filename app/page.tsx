
import Navbar from "../components/Navbar";
import ExploreSection from "@/components/ExploreSection";
import HeroSlider from "@/components/HeroSlider";
import LogoScroller from "@/components/LogoScroller";
import PGCoursesSection from "@/components/PgCourseSection";
import AddmissionProssec from "@/components/AddmissionProssec";
import NotableMoments from "@/components/NoteableMoments";
import ExpertMentors from "@/components/ExpertMentors";
import ExploreUniversitiesSection from "@/components/ExploreUniversitiesSection";
import AutoScrollStudents from "@/components/AutoScrollStudents";
import ExpertsAndStatsSection from "@/components/ExpertsAndStatsSection";
import WhyTrustSection from "@/components/WhyTrustSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { connectDB } from "../lib/db";

export default async function Home() {
  await connectDB();
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <ExploreSection />
      <LogoScroller />
      <PGCoursesSection />
      <AddmissionProssec />
      <NotableMoments />
      <ExpertMentors />
      <ExploreUniversitiesSection />
      <AutoScrollStudents />
      <ExpertsAndStatsSection />
      <WhyTrustSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
