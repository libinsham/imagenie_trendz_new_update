"use client";

import Image from "next/image";
import Link from "next/link";
import { team } from "../lib/team";


export default function TeamSection() {
  // Duplicate items for seamless scrolling
  const members = [...team, ...team];

  return (
    <section className="team-section c-block-padding--both">
      <div className="o-container">
        <div className="team-heading">
          <span className="team-subtitle">OUR PEOPLE</span>

          <h2>Meet Our Leadership Team</h2>

          <p>
            Our strategists, designers, marketers and technologists work
            together to create meaningful brand experiences and measurable
            business growth.
          </p>
        </div>

        <div className="team-slider-wrapper">
          <div className="team-slider">
            {members.map((member, index) => (
              <article className="team-card" key={`${member.id}-${index}`}>
                
                
                <div className="team-image">
                 <Image
  src={member.image}
  alt={member.name}
  fill
  className="team-img"
  sizes="(max-width: 768px) 260px, (max-width: 1024px) 280px, 320px"
/>

                  <div className="team-overlay">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-btn"
                    >
                      LinkedIn
                    </a>

                    <Link
                      href={`/team/${member.slug}`}
                      className="team-btn team-btn-orange"
                    >
                      More Details
                    </Link>
                  </div>
                </div>

                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}