'use client';

import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Image from 'next/image';

const HeroSection1 = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="flex items-center space-x-3 mb-6"
                        >
                            <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
                            {/* <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
                                About Adveb
                            </span> */}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-white"
                        >
                            Transforming
                            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Digital Dreams
                            </span>
                            Into Reality
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
                        >
                            Since our founding, weve been the strategic digital partner that ambitious companies trust to architect their digital transformation. We dont just build websites and apps—we create competitive advantages.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex flex-wrap gap-6"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                                    <Icon name="Calendar" size={20} className="text-cyan-400" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">2019</div>
                                    <div className="text-gray-400 text-sm">Founded</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                                    <Icon name="Users" size={20} className="text-cyan-400" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">150+</div>
                                    <div className="text-gray-400 text-sm">Projects Delivered</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                                    <Icon name="Award" size={20} className="text-cyan-400" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">25+</div>
                                    <div className="text-gray-400 text-sm">Industry Awards</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
                            <div className="absolute"></div>

                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-20 left-10 w-48 h-32 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                                        <Icon name="Code" size={16} className="text-white" />
                                    </div>
                                    <span className="text-white font-semibold">Development</span>
                                </div>
                                <div className="text-gray-300 text-sm">Cutting-edge web & mobile solutions</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-40 right-4 w-48 h-32 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                                        <Icon name="Palette" size={16} className="text-white" />
                                    </div>
                                    <span className="text-white font-semibold">Design</span>
                                </div>
                                <div className="text-gray-300 text-sm">User-centered design experiences</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [-5, 15, -5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute bottom-20 left-1/3 transform -translate-x-1/2 w-48 h-32 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                        <Icon name="TrendingUp" size={16} className="text-white" />
                                    </div>
                                    <span className="text-white font-semibold">Strategy</span>
                                </div>
                                <div className="text-gray-300 text-sm">Digital transformation consulting</div>
                            </motion.div>

                            {/* Central Logo */}
                            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div> */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-24 h-24 bg-gradient-to-br from-[#7df7d2] to-[#fa88ff] rounded-2xl flex items-center justify-center shadow-2xl">
                                    <Image
                                        src="/images/logo3dbg.png"
                                        alt="Company Logo"
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center space-y-2 text-gray-400"
                    >
                        <span className="text-sm font-medium">Scroll to explore</span>
                        <Icon name="ChevronDown" size={20} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection1;