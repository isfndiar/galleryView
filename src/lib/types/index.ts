export type BackgroundProps = {
  src?: string;
  alt?: string | undefined;
  fadeOut: boolean;
  currentImage?: number;
};

export type WallpaperProps = {
  id?: number | undefined;
  image: string;
  color: string;
  title?: string;
  top?: string;
  border?: string;
  bg?: string;
}[];

export type GalleryExpandedProps = {
  expanded: boolean;
  onClick: (index: number) => void;
  wallpaper: WallpaperProps;
  expandedClick: () => void;
};
