import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { FindDonors } from "@/pages/FindDonors";
import { RequestBlood } from "@/pages/RequestBlood";
import { BecomeDonor } from "@/pages/BecomeDonor";
import { BloodBanks } from "@/pages/BloodBanks";
import { Emergency } from "@/pages/Emergency";
import { Resources } from "@/pages/Resources";
import { Contact } from "@/pages/Contact";
import { Login } from "@/pages/Login";
import { Signup } from "@/pages/Signup";
import { Dashboard } from "@/pages/Dashboard";
import { Profile } from "@/pages/Profile";
import { Notifications } from "@/pages/Notifications";
import { NotFound } from "@/pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/find-donors" element={<FindDonors />} />
        <Route path="/request-blood" element={<RequestBlood />} />
        <Route path="/become-donor" element={<BecomeDonor />} />
        <Route path="/blood-banks" element={<BloodBanks />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
