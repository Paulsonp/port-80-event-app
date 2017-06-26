import { Component } from '@angular/core';

@Component({
  selector: 'pwa-code-of-conduct',
 template: `
<section class="">
  <div layout-gt-xs="row">
    <div flex class="pad" tdMediaToggle="gt-xs" [mediaClasses]="['pad-xl']">
      <!--<div class="push-top-xl" hide-xs></div>-->
      <div tdMediaToggle="gt-sm" [mediaClasses]="['push-lg']">
        <h3 class="md-display-1 tc-black-A400 push-top-xs push-bottom-sm">Code of Conduct</h3>
        <p class=" tc-black-400 text_premise">
          In order to keep FAYA:80 a fun, interesting and positive experience for everybody, we expect participants to follow the guidelines
          below.</p>
        <p class="tc-black-400 text_premise">
          <b>FAYA:80 </b>aims to be a free, open and cooperative event. This means we expect collaboration from all the FAYA:80
          participants, and for everybody to behave respectfully towards all others, including those that are different or
          think differently from yourself.
        </p>
        <p class="tc-black-400 text_premise">
          Please be helpful, considerate, friendly and respectful towards all other participants and respect the environment. We don't
          condone harassment or offensive behaviour at our conference. We consider it against our values as human beings.
          We're voicing our strong, unequivocal support of exemplary behaviour by all participants.
        </p>

        <p class=" tc-black-400 text_premise">
          Please remember that all FAYA:80 participants are here by invitation of the conference organisers and the ULB. We expect
          all participants to follow this Code of Conduct during the conference and related events. This includes conference-related
          social events at off-site locations, and in related online communities and social media. Participants asked to
          stop any unacceptable behaviour are expected to comply immediately. Conference participants violating this Code
          of Conduct may be expelled from the conference and/or banned from formal participation in future events.

        </p>
        <p class=" tc-black-400 text_premise">Please bring any concerns to the
        immediate attention of our coordinating team (contact details below).</p>
        <p class=" tc-black-400 text_premise">Thank you for your help in making
        <b>FAYA:80</b> a success and pleasant for all the people involved.</p>
      </div>
      <div class="push-bottom-xl" hide-xs></div>
    </div>

  </div>
</section>

  `
})
export class CodeOfConductComponent {

}
