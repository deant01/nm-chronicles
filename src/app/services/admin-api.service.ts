import { Injectable, inject } from '@angular/core';
import { APP_ENVIRONMENT_CONFIG, buildAssetUrl } from '../config';

export interface ImageUploadPayload {
  path: string;
  contentBase64: string;
}

@Injectable({ providedIn: 'root' })
export class AdminApiService {
  private readonly envConfig = inject(APP_ENVIRONMENT_CONFIG);

  private buildAssetUrl(path: string): string {
    return buildAssetUrl(this.envConfig.assetBasePath, path);
  }

  async getDataFileList(): Promise<string[]> {
    const response = await fetch('/api/admin/data');
    if (!response.ok) {
      throw new Error('Failed to load data file list.');
    }
    return response.json();
  }

  async getDataFile(fileName: string): Promise<string> {
    const apiResponse = await fetch(`/api/admin/data/${encodeURIComponent(fileName)}`);
    if (apiResponse.ok) {
      return apiResponse.text();
    }

    const assetUrl = this.buildAssetUrl(`assets/data/${fileName}`);
    const fallbackResponse = await fetch(assetUrl);
    if (!fallbackResponse.ok) {
      throw new Error('Failed to load data file.');
    }

    return fallbackResponse.text();
  }

  async saveDataFile(fileName: string, content: string): Promise<void> {
    const response = await fetch(`/api/admin/data/${encodeURIComponent(fileName)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      const message = body?.error || 'Failed to save data file.';
      throw new Error(message);
    }
  }

  async getImages(): Promise<string[]> {
    const response = await fetch('/api/admin/images');
    if (!response.ok) {
      throw new Error('Failed to load image list.');
    }
    return response.json();
  }

  async uploadImage(payload: ImageUploadPayload): Promise<void> {
    const response = await fetch('/api/admin/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      const message = body?.error || 'Failed to upload image.';
      throw new Error(message);
    }
  }
}
