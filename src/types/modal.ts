import type { ReactElement } from "react";

export interface ProjectData {
  id: number
  name: string
  logo?: string
  image: string
  description: string
  techStack: ReactElement[]
  liveLink: string
}

export interface ServiceData {
  id: number
  name: string
  description: string
  icon: string
}

export interface ExperienceData {
  company: string
  position: string
  date: string
  image: string
  description: string
  achievements: string[]
}

export type ModalType = "projects" | "services" | "experiences"

export type ModalData = ProjectData | ServiceData | ExperienceData
