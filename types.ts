export enum Screen {
  LANDING = 'LANDING',
  HOME = 'HOME',
  PROFILE = 'PROFILE',
  TRAINING = 'TRAINING',
  CALIBRATION = 'CALIBRATION',
  AR_LOBBY = 'AR_LOBBY',
  AR_SESSION = 'AR_SESSION',
  SUMMARY = 'SUMMARY',
}

export interface TrainingTask {
  name: string;
  completed: boolean;
}

export interface FingerAccuracy {
  finger: string;
  value: number;
}
