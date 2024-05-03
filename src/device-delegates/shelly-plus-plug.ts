import { ShellyPlusPlugUs,ShellyPlusPlugEu } from 'shellies-pp';

import { DeviceDelegate } from './base';

/**
 * Handles Shelly Plus Plug US devices.
 */
export class ShellyPlusPlugUsDelegate extends DeviceDelegate {
  protected setup() {
    const d = this.device as ShellyPlusPlugUs;

    this.addSwitch(d.switch0, { single: true });
  }
}

DeviceDelegate.registerDelegate(ShellyPlusPlugUsDelegate, ShellyPlusPlugUs,ShellyPlusPlugEu);
