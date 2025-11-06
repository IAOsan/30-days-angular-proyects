import { Type } from '@angular/core';
import {
  render,
  RenderComponentOptions,
} from '@testing-library/angular';
import userEvent, { UserEvent } from '@testing-library/user-event';

export async function setupRender<T>(
  ui: Type<T>,
  options?: RenderComponentOptions<T>
) {
  return await render(ui, { ...options });
}

export function setupUser(): UserEvent {
  return userEvent.setup();
}

// re-export everything
export * from '@testing-library/angular';
