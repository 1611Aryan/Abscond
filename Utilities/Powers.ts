const powers = {
  tsunade: {
    name: "tsunade",
    info: "Gain 25 Moles",
  },
  l_lawliet: {
    name: "l lawliet",
    info: "Free Hint",
  },
  trafalgar_d_law: {
    name: "trafalgar d law",
    info: "New Question",
  },
  luffy: {
    name: "luffy",
    info: "Reveal Partial Answer",
  },
  saitama: {
    name: "saitama",
    info: "Next Question",
  },
}

export const isPower = (power: string) =>
  power === "tsunade" ||
  power === " l_lawliet" ||
  power === " trafalgar_d_law" ||
  power === "luffy" ||
  power === "saitama"

export const calculateCost = (power: string) => {
  if (power === "tsunade") return 20
  if (power === " l_lawliet") return 30
  if (power === " trafalgar_d_law") return 45
  if (power === "luffy") return 55
  return 70
}

export default powers
