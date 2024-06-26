import { ShellyPro2CoverPm } from 'shellies-pp';

import { DeviceDelegate } from './base';

/**
 * Handles Shelly Pro 4PM devices.
 */
export class ShellyPro2CoverPmDelegate extends DeviceDelegate {
  protected setup() {
    const d = this.device as ShellyPro2CoverPm;
    const isCover = true;

    this.addCover(d.cover0, { active: isCover });
    this.addCover(d.cover1, { active: isCover });

    this.addSwitch(d.switch0, { active: !isCover });
    this.addSwitch(d.switch1, { active: !isCover });
    this.addSwitch(d.switch2, { active: !isCover });
    this.addSwitch(d.switch3, { active: !isCover });
  }
}

DeviceDelegate.registerDelegate(ShellyPro2CoverPmDelegate, ShellyPro2CoverPm);
