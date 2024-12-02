import React from 'react';
import { Users, Target, Globe, Award } from 'lucide-react';

function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              About AI-Solutions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-purple-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Innovating the future of digital employee experience through AI-powered solutions
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Digital Innovation
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We are committed to innovating, promoting, and delivering the future of the digital employee experience,
              with a strong focus on supporting people at work.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-md">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">People First</h3>
              <p className="mt-2 text-base text-gray-500">
                We prioritize the human experience in every solution we develop.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-md">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-2 text-base text-gray-500">
                Constantly pushing boundaries with cutting-edge AI solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-md">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Global Impact</h3>
              <p className="mt-2 text-base text-gray-500">
                Making a worldwide impact through digital transformation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-md">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Excellence</h3>
              <p className="mt-2 text-base text-gray-500">
                Committed to delivering the highest quality solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Experienced professionals dedicated to advancing AI technology
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Yubraj Khatra Acharya',
                role: 'Chief Executive Officer',
                image: 'https://themenepal.com/wp-content/uploads/2023/08/yuvraj.jpg'
              },
              {
                name: 'Sushan Kera Bajracharya',
                role: 'Chief Technology Officer',
                image: 'https://themenepal.com/wp-content/uploads/2023/05/IMG_20230522_215134-e1685088731928.jpg?auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Nirajan Chapprri KC',
                role: 'Head of AI Research',
                image: 'https://themenepal.com/wp-content/uploads/2023/05/LX4A4614-rotated-e1685090204412.jpg'
              }
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="h-48 w-full object-cover"
                  src={person.image}
                  alt={person.name}
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{person.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;