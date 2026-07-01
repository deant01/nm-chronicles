import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'character/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { id: 'miroslav-dion' },
        { id: 'the-protector' },
        { id: 'the-unknown-emissary' },
        { id: 'george-laris' },
        { id: 'unnamed-bride' },
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
