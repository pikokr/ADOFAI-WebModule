import { Color } from "./index";

/**
 * List of events available in ADOFAI.
 */
export type EventType =
    | "AddDecoration"
    | "AddText"
    | "AnimateTrack"
    | "Bloom"
    | "ChangeTrack"
    | "Checkpoint"
    | "ColorTrack"
    | "CustomBackground"
    | "Flash"
    | "HallOfMirrors"
    | "MoveCamera"
    | "MoveDecoration"
    | "MoveTrack"
    | "PositionTrack"
    | "RecolorTrack"
    | "RepeatEvents"
    | "ScreenScroll"
    | "ScreenTile"
    | "SetConditionalEvents"
    | "SetFilter"
    | "SetHitsound"
    | "SetPlanetRotation"
    | "SetSpeed"
    | "SetText"
    | "ShakeScreen"
    | "Twirl"
    | "$UNKNOWN_ACTION";

/**
 * Position vector of objects in the game.
 */
export type Position = [number, number];

/**
 * Floor range type to select the location from specific position.
 */
export type FloorRange = [number, TileRange];

/**
 * Level's path code which decides the angle of the tiles.
 */
export type PathCode =
    | "U"
    | "R"
    | "L"
    | "D"
    | "E"
    | "C"
    | "Q"
    | "Z"
    | "H"
    | "G"
    | "T"
    | "J"
    | "M"
    | "B"
    | "F"
    | "N"
    | "q"
    | "W"
    | "x"
    | "V"
    | "Y"
    | "A"
    | "p"
    | "o"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "h"
    | "j"
    | "t"
    | "y"
    | "!";

/**
 * List of background display modes.
 */
export type BGDisplayMode = "FitToScreen" | "Unscaled" | "Tiled";

/**
 * List of decoration relavite to options.
 */
export type DecoRelativeTo = "Tile" | "Global" | "RedPlanet" | "BluePlanet";

/**
 * List of ease types.
 */
export type Ease =
    | "Linear"
    | "InSine"
    | "OutSine"
    | "InOutSine"
    | "InQuad"
    | "OutQuad"
    | "InOutQuad"
    | "InCubic"
    | "OutCubic"
    | "InOutCubic"
    | "InQuart"
    | "OutQuart"
    | "InOutQuart"
    | "InQuint"
    | "OutQuint"
    | "InOutQuint"
    | "InExpo"
    | "OutExpo"
    | "InOutExpo"
    | "InCirc"
    | "OutCirc"
    | "InOutCirc"
    | "InElastic"
    | "OutElastic"
    | "InOutElastic"
    | "InBack"
    | "OutBack"
    | "InOutBack"
    | "InBounce"
    | "OutBounce"
    | "InOutBounce"
    | "Flash"
    | "InFlash"
    | "OutFlash"
    | "InOutFlash";

/**
 * List of filters.
 */
export type Filter =
    | "Grayscale"
    | "Sepia"
    | "Invert"
    | "VHS"
    | "EightiesTV"
    | "FiftiesTV"
    | "Arcade"
    | "LED"
    | "Rain"
    | "Blizzard"
    | "PixelSnow"
    | "Compression"
    | "Glitch"
    | "Pixelate"
    | "Wave"
    | "Static"
    | "Grain"
    | "MotionBlur"
    | "FishEye"
    | "Aberration"
    | "Drawing"
    | "Neon"
    | "Handheld"
    | "NightVision"
    | "Funk"
    | "Weird3D";

/**
 * List of font types for text decorations.
 */
export type Font =
    | "Default"
    | "Arial"
    | "ComicSansMS"
    | "CourierNew"
    | "Georgia"
    | "Impact"
    | "TimesNewRoman";

/**
 * List of hitsounds.
 */
export type Hitsound =
    | "Hat"
    | "Kick"
    | "Shaker"
    | "Sizzle"
    | "Chunk"
    | "ShakerLoud"
    | "None";

/**
 * List of plane types for flash event.
 */
export type Plane = "Foreground" | "Background";

/**
 * List of relative to options.
 */
export type RelativeTo = "Player" | "Tile" | "Global" | "LastPosition";

/**
 * List of artist types.
 */
export type SpecialArtistType = "None" | "AuthorIsArtist" | "PublicLicense";

/**
 * List of methods to change speed.
 */
export type SpeedType = "Bpm" | "Multiplier";

/**
 * List of tile range options.
 */
export type TileRange = "ThisTile" | "Start" | "End";

/**
 * List of track appear animations.
 */
export type TrackAppearAnimation =
    | "None"
    | "Assemble"
    | "AssembleFar"
    | "Extend"
    | "Grow"
    | "GrowSpin"
    | "Fade"
    | "Drop"
    | "Rise";

/**
 * List of track color pulse types.
 */
export type TrackColorPulse = "None" | "Forward" | "Backward";

/**
 * List of track color types.
 */
export type TrackColorType =
    | "Single"
    | "Stripes"
    | "Glow"
    | "Blink"
    | "Switch"
    | "Rainbow";

/**
 * List of track disappear types.
 */
export type TrackDisappearAnimation =
    | "None"
    | "Scatter"
    | "ScatterFar"
    | "Retract"
    | "Shrink"
    | "ShrinkSpin"
    | "Fade";

/**
 * List of track styles.
 */
export type TrackStyle = "Standard" | "Neon" | "NeonLight" | "Basic" | "Gems";

/**
 * Level's settings value.
 */
export interface Settings {
    /**
     * File version to allow ADOFAI convert files to level data.
     *
     * Only allows integers.
     */
    version: number;

    /**
     * Music artist's nickname.
     */
    artist: string;

    /**
     * Special situations where you don't need to provide a permission from the artist in `artistPermission` property.
     */
    specialArtistType: SpecialArtistType;

    /**
     * Proof of artist's permission.
     *
     * This is a local file directory.
     */
    artistPermission: string;

    /**
     * The music name.
     */
    song: string;

    /**
     * Level creator's nickname.
     */
    author: string;

    /**
     * Whether to separate countdown time from the music.
     */
    separateCountdownTime: boolean;

    /**
     * Directory for the preview image file.
     *
     * This is a local file directory.
     *
     * (424 x 512 size recommended.)
     */
    previewImage: string;

    /**
     * Directory for the preview icon file.
     *
     * This is a local file directory.
     *
     * (100 x 100 recommended, use background-transparent image.)
     */
    previewIcon: string;

    /**
     * Preview icon's color.
     */
    previewIconColor: Color;

    /**
     * Music preview start timing (in seconds).
     *
     * Only allows integers.
     */
    previewSongStart: number;

    /**
     * Music preview duration (in seconds).
     *
     * Only allows integers.
     *
     * (allowed range: 1 ~ 20 seconds.)
     */
    previewSongDuration: number;

    /**
     * Whether seizure warning is enabled.
     */
    seizureWarning: boolean;

    /**
     * Description of the level.
     */
    levelDesc: string;

    /**
     * Tags of the level (separated by commas).
     */
    levelTags: string;

    /**
     * URLs leading to the artist's content (separated by commas).
     */
    artistLinks: string;

    /**
     * Difficulty of this level.
     *
     * Only allows integers.
     *
     * (allowed range: 1 ~ 10.)
     */
    difficulty: number;

    /**
     * Directory for the music file.
     *
     * This is a local file directory.
     */
    songFilename: string;

    /**
     * BPM of the music.
     */
    bpm: number;

    /**
     * Volume of the music.
     *
     * Only allows integers.
     */
    volume: number;

    /**
     * Offset for the music.
     *
     * Only allows integers.
     */
    offset: number;

    /**
     * Music's pitch.
     */
    pitch: number;

    /**
     * Playing hitsound.
     */
    hitsound: Hitsound;

    /**
     * Hitsound's volume.
     */
    hitsoundVolume: number;

    /**
     * Total amount of countdown ticks.
     */
    countdownTicks: number;

    /**
     * Tracks' coloring type.
     */
    trackColorType: TrackColorType;

    /**
     * Tracks' primary color.
     */
    trackColor: Color;

    /**
     * Tracks' additional color.
     */
    secondaryTrackColor: Color;

    /**
     * Duration of tracks' color animation.
     */
    trackColorAnimDuration: number;

    /**
     * Tracks' color pulse type.
     */
    trackColorPulse: TrackColorPulse;

    /**
     * Tracks' color pulse amount.
     */
    trackPulseLength: number;

    /**
     * Tracks' style.
     */
    trackStyle: TrackStyle;

    /**
     * Tracks' appear animation.
     */
    trackAnimation: TrackAppearAnimation;

    /**
     * Beats ahead to display animation.
     *
     * Only allows integers.
     */
    beatsAhead: number;

    /**
     * Tracks' disappear animation.
     */
    trackDisappearAnimation: TrackDisappearAnimation;

    /**
     * Beats behind to display animation.
     *
     * Only allows integers.
     */
    beatsBehind: number;

    /**
     * The color of background.
     */
    backgroundColor: Color;

    /**
     * Whether to show default tutorial background if there is no background image specified or found.
     */
    showDefaultBGIfNoImage: boolean;

    /**
     * Directory of the background image file.
     *
     * This is a local file directory.
     */
    bgImage: string;

    /**
     * The background image's color.
     */
    bgImageColor: Color;

    /**
     * The background image's parallax.
     */
    parallax: Position;

    /**
     * Background image's displaying mode.
     */
    bgDisplayMode: BGDisplayMode;

    /**
     * Whether to lock background's rotation.
     */
    lockRot: boolean;

    /**
     * Whether to loop background.
     */
    loopBG: boolean;

    /**
     * Unscaled background's size.
     */
    unscaledSize: number;

    /**
     * Camera's relative position target.
     */
    relativeTo: RelativeTo;

    /**
     * Camera's (relative) position.
     */
    position: Position;

    /**
     * Camera's rotation.
     */
    rotation: number;

    /**
     * Camera's zoom.
     */
    zoom: number;

    /**
     * Directory of the background video.
     */
    bgVideo: string;

    /**
     * Whether to loop video after video is finished.
     */
    loopVideo: boolean;

    /**
     * Offset of the video.
     *
     * Only allows integers.
     */
    vidOffset: number;

    /**
     * Whether to display outlines on floor's icons.
     */
    floorIconOutlines: boolean;

    /**
     * Whether to stick planets to floors.
     */
    stickToFloors: boolean;

    /**
     * Planets' rotation ease.
     */
    planetEase: Ease;

    /**
     * Planets' rotation ease parts.
     */
    planetEaseParts: number;

    /**
     * Whether legacy flash is enabled.
     */
    legacyFlash: boolean;
}

export type JSONActionStructure = {
    floor: number;
    eventType: EventType;
    [key: string]: any;
};

export type JSONLevelStructure = {
    angleData?: number[];
    pathData?: string;
    settings: Settings;
    actions: JSONActionStructure[];
};
