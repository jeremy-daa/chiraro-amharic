import React from 'react';
import { FEATURES } from '../constants';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';



const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-24 bg-white border-y border-black/5 relative overflow-hidden"
    >
      {/* Background Image Accent */}
      <div
        className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none bg-contain bg-no-repeat rotate-12 transform translate-x-1/4 -translate-y-1/4"
        style={{ backgroundImage: "url(/images/axum-obelisk.png)" }}
      ></div>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You{" "}
            <span className="inline-block border border-black bg-brand-pink px-4 rounded-full text-white">
              Need
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine expert instruction with modern methods to help you
            succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="bg-brand-bg p-8 rounded-[2rem] border border-black/10 hover:border-black transition-all hover:shadow-lg text-center flex flex-col items-center"
            >
              <div
                className={`mb-6 w-20 h-20 rounded-full flex items-center justify-center border-2 border-black ${idx % 2 === 0 ? "bg-brand-lime" : "bg-brand-blue"}`}
              >
                {React.cloneElement(feature.icon as React.ReactElement<any>, {
                  className: "w-8 h-8 text-black",
                })}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Data Visualization Section */}
        <div className="bg-brand-bg rounded-[2.5rem] p-8 md:p-12 border border-black flex flex-col lg:flex-row items-center gap-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
          <div className="lg:w-1/2">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              IMPACT
            </span>
            <h3 className="text-3xl font-bold mb-4">Real Results</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over <strong>150+ students</strong> and{" "}
              <strong>300+ hours</strong> of content, our alumni consistently
              report <strong>2x faster</strong> language acquisition. Join us{" "}
              <strong>Online</strong> or <strong>In-Person</strong> to see the
              difference.
            </p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-sm font-bold">
                <div className="w-3 h-3 rounded-full bg-brand-lime border border-black"></div>{" "}
                Chiraro Method
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>{" "}
                Traditional
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-64 bg-white rounded-2xl p-4 border border-black/5 relative">
            <p className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-gray-400 whitespace-nowrap">
              Vocabulary Size
            </p>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={[
                  { name: "Month 1", traditional: 50, chiraro: 150 },
                  { name: "Month 2", traditional: 120, chiraro: 350 },
                  { name: "Month 3", traditional: 200, chiraro: 600 },
                  { name: "Month 4", traditional: 300, chiraro: 900 },
                  { name: "Month 6", traditional: 450, chiraro: 1500 },
                ]}
              >
                <defs>
                  <linearGradient id="colorChiraro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4F853" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#D4F853" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorTrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E5E7EB" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#E5E7EB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  stroke="#9CA3AF"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#9CA3AF"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderColor: "#000",
                    borderRadius: "12px",
                    color: "#000",
                    boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.1)",
                  }}
                  itemStyle={{ color: "#000", fontWeight: "bold" }}
                  formatter={(value: number) => [`${value} words`, undefined]}
                />
                <Area
                  type="monotone"
                  dataKey="traditional"
                  stroke="#9CA3AF"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorTrad)"
                />
                <Area
                  type="monotone"
                  dataKey="chiraro"
                  stroke="#000"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorChiraro)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
