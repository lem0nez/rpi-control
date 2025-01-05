import { gql } from "../__generated__";

export const GLOBAL_EVENTS = gql(`
  subscription OnGlobalEvent {
    globalEvents
  }
`);

export const PREFERENCES = gql(`
  query Preferences {
    preferences {
      masterApHandlingEnabled
      piano {
        soundsVolume
        recordAmplitudeScale
        recordingsArtist
      }
    }
  }
`);

export const UPDATE_PREFERENCES = gql(`
  mutation UpdatePreferences(
    $masterApHandlingEnabled: Boolean
    $pianoSoundsVolume: Float
    $pianoRecordAmplitudeScale: OptionalFloatUpdate
    $pianoRecordingsArtist: OptionalStringUpdate
  ) {
    updatePreferences(update: {
      masterApHandlingEnabled: $masterApHandlingEnabled
      piano: {
        soundsVolume: $pianoSoundsVolume
        recordAmplitudeScale: $pianoRecordAmplitudeScale
        recordingsArtist: $pianoRecordingsArtist
      }}
    )
  }
`);
