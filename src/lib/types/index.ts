export type BackgroundProps = {
  src: string;
  alt: string | undefined;
  fadeOut: boolean;
};

export type WallpaperProps = {
  id?: number | undefined;
  image: string;
  color: string;
  title?: string;
  top?: string;
  border?: string;
}[];

export type GalleryExpandedProps = {
  expanded: boolean;
  onClick: (index: number) => void;
  wallpaper: WallpaperProps;
};
