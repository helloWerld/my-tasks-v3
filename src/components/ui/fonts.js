import { Shadows_Into_Light, Dosis, Poppins } from "next/font/google";

export const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const dosis = Dosis({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
});
