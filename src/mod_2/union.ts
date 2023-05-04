// union
type NoobDev = {
  name: string;
};

// type JuniorDev = {
//     name: string,
//     expertise: string,
//     experience: number
// }

type JuniorDev = NoobDev & {
  expertise: string;
  experience: number;
};

// enum
enum Level {
  junior = "junior",
  mid = "mid",
  senior = "sr",
}

type NextLevelDevelopers = JuniorDev & {
  leadershipExperience: number;
  level: Level;
};

const newDevloper: NoobDev | JuniorDev = {
  name: "moz",
  expertise: "Sr",
  experience: 7,
};

const developer: NextLevelDevelopers = {
  name: "Next Bhai",
  expertise: "tsc",
  experience: 7,
  leadershipExperience: 5,
  level: Level.senior,
};
