'use client';

import React, { useState, useEffect } from 'react';
import { Gift, PartyPopper, Music, Sparkles, Heart } from 'lucide-react';

const DeviBirthdayCountdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isBirthday, setIsBirthday] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const calculateTimeLeft = () => {
            // Get current local time and convert to GMT+4
            const now = new Date();
            const currentGMT4 = new Date(now.getTime() + (4 * 60 * 60 * 1000) + (now.getTimezoneOffset() * 60 * 1000));

            // Get current year for birthday
            const currentYear = currentGMT4.getFullYear();
            let birthdayThisYear = new Date(currentYear, 6, 7, 0, 0, 0); // July 7th (month is 0-indexed)

            // If birthday has passed this year, set it for next year
            if (currentGMT4 > birthdayThisYear) {
                birthdayThisYear = new Date(currentYear + 1, 6, 7, 0, 0, 0);
            }

            // Check if it's exactly the birthday (July 7th)
            const isToday = currentGMT4.getMonth() === 6 && currentGMT4.getDate() === 7;
            setIsBirthday(isToday);

            if (isToday) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const difference = birthdayThisYear.getTime() - currentGMT4.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleSandstormClick = () => {
        window.open('https://www.youtube.com/watch?v=y6120QOlsfU', '_blank', 'noopener,noreferrer');
    };

    if (!mounted) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="animate-pulse text-white text-xl">Loading...</div>
            </div>
        );
    }

    if (isBirthday) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-bounce"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        >
                            <Sparkles className="text-yellow-300 text-2xl opacity-80" />
                        </div>
                    ))}
                </div>

                <div className="text-center z-10 space-y-8 p-8">
                    <div className="animate-pulse">
                        <PartyPopper className="w-24 h-24 text-yellow-300 mx-auto mb-6" />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-bounce">
                        🎉 HAPPY BIRTHDAY! 🎉
                    </h1>

                    <h2 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-8 animate-pulse">
                        DEVI ONIANI
                    </h2>

                    <div className="space-y-6">
                        <p className="text-2xl md:text-3xl text-white font-medium">
                            Hope your special day is amazing!
                        </p>

                        <button
                            onClick={handleSandstormClick}
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <Music className="w-6 h-6 mr-3 animate-bounce" />
                            🎵 Play Darude - Sandstorm! 🎵
                            <div className="absolute inset-0 rounded-full bg-white opacity-20 group-hover:animate-pulse"></div>
                        </button>
                    </div>

                    <div className="flex justify-center space-x-4 mt-8">
                        <Heart className="w-8 h-8 text-red-400 animate-pulse" />
                        <Gift className="w-8 h-8 text-green-400 animate-bounce" />
                        <Heart className="w-8 h-8 text-red-400 animate-pulse" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
            {/* Animated background stars */}
            <div className="absolute inset-0">
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="text-center z-10 space-y-8 p-8 max-w-4xl">
                <div className="mb-8">
                    <Gift className="w-20 h-20 text-yellow-400 mx-auto mb-4 animate-bounce" />
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                        დევის დაბიდუბი
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-200 font-medium">
                        🎂 როის მოვა 7 რო არ მივულოცო :*** 🎂
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Days', value: timeLeft.days },
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Minutes', value: timeLeft.minutes },
                        { label: 'Seconds', value: timeLeft.seconds }
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="text-4xl md:text-6xl font-bold text-white mb-2 font-mono">
                                {item.value.toString().padStart(2, '0')}
                            </div>
                            <div className="text-purple-200 text-lg font-medium uppercase tracking-wider">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-4">
                    {/*<p className="text-lg md:text-xl text-purple-200">*/}
                    {/*     🎊*/}
                    {/*</p>*/}
                    <div className="flex justify-center space-x-2">
                        <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                        <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
                        <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeviBirthdayCountdown;
