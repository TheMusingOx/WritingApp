export interface storyEvent {
  ID: string;
  storyID: string;
  name: string;
  desc: string;
  beingEdited: boolean;
  status: cellStatus;
  storyTime?: string;
  storyOrder: number;
  presentOrder: number;
}

export interface Quest {
  ID: string;
  name: string;
  type: number;
  desc: string;
}

export interface Cell {
  ID: string;
  charID: string;
  questID: string;

  type: QuestIcon;
  desc: string;
  attempt: number;
  typeValue: number;
  // Obstacle-difficulty
  // Drive-satisfaction
  // Quest-happiness
  // Way-effectiveness
}

export enum cellStatus {
  saved = 1,
  edited = 2,
  new = 3,
  deleted = 4,
}

export enum QuestIcon {
  Drive_Groove = 10,
  Drive_Embark,
  Drive_Failure,
  Drive_Corrective,
  Drive_Success,

  Way_Groove = 20,
  Way_Embark,
  Way_Failure,
  Way_Corrective,
  Way_Success,

  Quest_Groove = 30,
  Quest_Embark,
  Quest_Failure,
  Quest_Corrective,
  Quest_Success,

  Obstalce_Groove = 40,
  Obstalce_Embark,
  Obstalce_Failure,
  Obstalce_Corrective,
  Obstalce_Success,
}

