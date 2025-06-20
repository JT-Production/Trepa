import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Zap,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GiToken } from "react-icons/gi";
import { MdClass } from "react-icons/md";
import { RiAiGenerate2 } from "react-icons/ri";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function TrepaLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          <Image
            className="w-30"
            src={"/Trepa_logo_white.svg"}
            alt=""
            width={150}
            height={100}
          />
        </div>
        <div className="flex items-center space-x-6 text-gray-300 header">
          <Link href="#" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Beta
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        <Button
              size="lg"
              className="bg-gradient-to-r header from-pink-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white px-6 py-4 text-lg"
            >
              Join Beta <ArrowRight className="ml-0.5 w-5 h-5" />
            </Button>
      </nav>
      {/* grid background */}
     <div className="absolute z-10 inset-0 h-full w-full 
bg-[linear-gradient(to_right,#101010_1px,transparent_1px),linear-gradient(to_bottom,#101010_1px,transparent_1px)] 
bg-[size:50px_50px]" />


      {/* Hero Section */}
      <section className="flex justify-center px-6 py-10 text-center min-h-screen">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div> */}
        {/* subtle two left and right glow */}
        <div className="absolute inset-0 flex z-20 items-center justify-between pointer-events-none">
          <div className="w-[500px] h-[600px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-30 -translate-x-40"></div>
          <div className="w-[500px] h-[600px] bg-gradient-to-l from-pink-500 to-purple-500 rounded-full blur-3xl opacity-30 "></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-900/50 border border-pink-500 mb-8">
            <Zap className="w-4 h-4 mr-2 text-pink-500" />
            <span className="text-xs text-gray-300 para">
              World's First Precision Predictions Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bol mb-6 leading-tigt header">
            Flex Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Financial Foresight
            </span>
          </h1>

          <p className="text-md  text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed para">
            Don't just be right. Be{" "}
            <span className="text-blue-400 font-semibold">accurate</span>. Get
            rewarded for precision, not just lucky guesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center para">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white px-8 py-6 text-lg"
            >
              Join Beta <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-pink-500 text-white hover:bg-gray-900 rounded-xl px-8 py-6 text-lg"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-32 w-full">
        
             {/* GLOW*/}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-200 h-120 rounded-b-none bg-gradient-to-r  from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-30"></div>
        </div> */}
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-cente">
            <div className="inline-flex items-center px-4 py-1 w-fit rounded-full bg-gray-900/50 border border-pink-500 mb-5">
          {/* <Zap className="w-4 h-4 mr-2 text-pink-500" /> */}
          <span className="text-xs text-gray-300 para">About</span>
        </div>
            <h1 className="header font-bold text-4xl ">
              What Sets{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Trepa
              </span>{" "}
              Apart
            </h1>
            <p className="para text-sm text-white/80 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
              <span className="text-pink-500 text-xl rounded-lg p-3 bg-white/10"><RiAiGenerate2 /></span>
              <p className="para text-md ">AI Assitant to help you become Certified</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
              <span className="text-pink-500  text-xl rounded-lg p-3 bg-white/10"><VscVerifiedFilled /></span>
              <p className="para text-md ">Get Certified After taking Amplitude test</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
              <span className="text-pink-500 text-lg rounded-lg p-3 bg-white/10"><MdClass /></span>
              <p className="para text-md ">Classes for all fields</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-3xl p-5 rounded-lg border border-white/10 cursor-pointer">
              <span className="text-pink-500 text-lg rounded-lg p-3 bg-white/10"><GiToken /></span>
              <p className="para text-md ">Earn Reward Token After Activies</p>
            </div>
         
          </div>
          </div>
            <div className="relative flex items-center justify-center">
            {/* Glow background behind the image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[450px] h-[450px] bg-pink-500 rounded-full blur-3xl opacity-60"></div>
            </div>
            <Image
              src="/phone.png"
              alt="Trepa Hero Image"
              width={1000}
              height={1000}
              className="rounded-2xl h-[700px] object-cover shadow-lg mt-4 md:mt-0 relative z-10"
            />
            </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 header">
              Prediction Markets Are{" "}
              <span className="text-red-400">Broken</span>
            </h2>
            <p className="text-sm text-gray-300 max-w-3xl mx-auto para">
              Today's markets turn every question into a binary bet. Guess
              99,999 when the answer is 100,001? You lose everything—just like
              someone who guessed 50,000.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="bg-red-900/20 border-red-800/50 p-10 rounded-2xl">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-red-400 mb-5 para">
                  Traditional Markets
                </h3>
                <div className="space-y-4 para">
                  <div className="flex items-center justify-between p-4 bg-red-900/30 rounded-lg">
                    <span>Guess: 99,999</span>
                    <span className="text-red-400 font-bold">LOSE</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-900/30 rounded-lg">
                    <span>Guess: 50,000</span>
                    <span className="text-red-400 font-bold">LOSE</span>
                  </div>
                  <div className="text-center text-gray-400 mt-4">
                    Answer: 100,001
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-800/50 p-10 rounded-2xl">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-green-400 mb-5 para">
                  Trepa Precision
                </h3>
                <div className="space-y-4 para">
                  <div className="flex items-center justify-between p-4 bg-green-900/30 rounded-lg">
                    <span>Guess: 99,999</span>
                    <span className="text-green-400 font-bold">BIG WIN</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-900/30 rounded-lg">
                    <span>Guess: 50,000</span>
                    <span className="text-yellow-400 font-bold">SMALL WIN</span>
                  </div>
                  <div className="text-center text-gray-400 mt-4">
                    Answer: 100,001
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 header">
              Simple:{" "}
              <span className="text-pink-500">Slide, Stake, Show Off</span>
            </h2>
            <p className="text-sm text-gray-300 para">
              Our precision prediction mechanism rewards accuracy over luck
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 ">
            <Card className="bg-gray-900/40 border-gray-700 p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 header">1. Slide</h3>
                <p className="text-gray-300 text-sm para">
                  Use our intuitive slider to make your precise prediction. No
                  more binary yes/no—give us your exact number.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 header">2. Stake</h3>
                <p className="text-gray-300 text-sm para">
                  Put your money where your prediction is. The more confident
                  you are, the more you can stake.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 header">3. Show Off</h3>
                <p className="text-gray-300 text-sm para">
                  Get rewarded based on your accuracy. The closer you are, the
                  bigger your payout.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Precision Demo */}
      <section className="px-6 py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 header">
            Accuracy <span className="text-pink-400">Pays</span>
          </h2>

          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-bold mb-6 text-blue-400 para">
              Example: "What will inflation be next month?"
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-red-900/20 border border-red-800/50 rounded-xl">
                <div className="text-2xl font-bold text-red-400 mb-2 para">
                  8%
                </div>
                <div className="text-sm text-gray-400 mb-4 para">
                  Your Guess
                </div>
                <div className="text-lg font-bold text-red-400 header ">
                  Small Payout
                </div>
              </div>

              <div className="p-6 bg-green-900/20 border border-green-800/50 rounded-xl">
                <div className="text-2xl font-bold text-green-400 mb-2 para">
                  4.9%
                </div>
                <div className="text-sm text-gray-400 mb-4 para">
                  Your Guess
                </div>
                <div className="text-lg font-bold text-green-400 header">
                  Big Payout
                </div>
              </div>

              <div className="p-6 bg-blue-900/20 border border-blue-800/50 rounded-xl">
                <div className="text-2xl font-bold text-blue-400 mb-2 para">
                  5.0%
                </div>
                <div className="text-sm text-gray-400 mb-4 para">
                  Actual Result
                </div>
                <div className="text-lg font-bold text-blue-400 header">
                  Truth
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-300 para">
            The closer your prediction, the bigger your reward. It's time to
            make precision profitable.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 header">
            Ready to Show Off Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              IQ?
            </span>
          </h2>

          <p className="text-sm para text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the beta and be among the first to experience precision
            predictions. Turn your financial foresight into real rewards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center header">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl"
            >
              Join Beta Now
              <ChevronRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-6 para">
            No crypto knowledge required. Built for everyone.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
              <Image
            className="w-28"
            src={"/Trepa_logo_white.svg"}
            alt=""
            width={150}
            height={100}
          />
            </div>
            <div className="flex space-x-8 text-gray-400 header text-sm">
              <Link href="#" className="hover:text-white transition-colors">
                About
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Beta
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 header">
            <p>
              &copy; 2025 Trepa. All rights reserved.
              platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
