export type UserRole = "student" | "mentor";

export type StudentAcademicStage =
  | "undergraduate"
  | "postgraduate"
  | "phd"
  | "";

export type MentorContributionType =
  | "faculty"
  | "industry"
  | "researcher"
  | "technical_expert"
  | "startup"
  | "design"
  | "other"
  | "";

export interface StudentProfileData {
  academicStage: StudentAcademicStage;
  degreeName?: string;
  fullName: string;
  phone: string;
  institution: string;
  department: string;
  currentYear: string;
  interests: string[];
}

export interface MentorProfileData {
  contributionType: MentorContributionType;
  customContribution?: string;
  fullName: string;
  phone: string;
  designation: string;
  organization: string;
  yearsOfExperience: string;
  domains: string[];
  mentoringAreas: string[];
  linkedinUrl?: string;
  availability: string;
}

export interface OnboardingState {
  role: UserRole | null;
  student: StudentProfileData;
  mentor: MentorProfileData;
  account: {
    email: string;
    password: string;
    confirmPassword: string;
  };
}
