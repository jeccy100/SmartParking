import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { flatMap } from 'rxjs/operators';
import { QRCService, qrcI } from '../services/qrcservice.service';
import { Observable } from 'rxjs';
import { o_userI } from '../services/occupied-user.service';
import { p_spaceI } from '../services/parking-space.service';


@Component({
  selector: 'app-swap-vehicles',
  templateUrl: './swap-vehicles.page.html',
  styleUrls: ['./swap-vehicles.page.scss'],
})
export class SwapVehiclesPage implements OnInit {
  query: Query;
  docRef: DocumentReference;
  spaces: Observable<any[]>;
  s_space: p_spaceI;

  docRef1: DocumentReference;
  spaces1: Observable<any[]>;
  s_space1: p_spaceI;
  License = '';
  userallocateid = '';
  qrcObj: qrcI;
  encodedData: string = '';
  FPrinter: boolean = false;
  
  freeSpace: p_spaceI;
  freeSpaceID: string;

  
  reservedSpace: p_spaceI;


  selectedSpot: string;
  SbuttonColor = 'clear';
  iconColor: any = '#00FF00';
  iconColor1 = 'white';
  iconColor2 = 'red';
  iconColor3 = 'white';
  iconColor4 = 'red';
  iconColor5 = 'white';
  iconColor6 = 'red';
  iconColor7 = 'white';
  iconColor8 = 'red';
  iconColor9 = 'white';
  iconColor10 = 'red';
  iconColor11 = 'white';
  iconColor12 = 'white';
  iconColor13 = 'white';
  iconColor14 = 'white';
  iconColor15 = 'white';
  iconColor16 = 'white';
  iconColor17 = 'white';
  iconColor18 = 'white';
  iconColor19 = 'white';
  iconColor20 = 'white';
  iconColor21 = 'white';
  iconColor22 = 'white';
  iconColor23 = 'white';
  iconColor24 = 'white';
  iconColor25 = 'white';
  iconColor26 = 'white';
  iconColor27 = 'white';
  iconColor28 = 'white';
  iconColor29 = 'white';
  iconColor30 = 'white';
  iconColor31 = 'white';
  iconColor32 = 'white';
  iconColor33 = 'white';
  iconColor34 = 'white';
  iconColor35 = 'white';
  iconColor36 = 'white';
  iconColor37 = 'white';
  iconColor38 = 'white';
  iconColor39 = 'white';
  iconColor40 = 'white';
  iconColor41 = 'white';
  iconColor42 = 'white';
  iconColor43 = 'white';
  iconColor44 = 'white';
  iconColor45 = 'white';
  iconColor46 = 'white';
  iconColor47 = 'white';
  iconColor48 = 'white';
  iconColor49 = 'white';
  iconColor50 = 'white';
  iconColor51 = 'white';
  iconColor52 = 'white';
  iconColor53 = 'white';
  iconColor54 = 'white';
  iconColor55 = 'white';
  iconColor56 = 'white';
  iconColor57 = 'white';
  iconColor58 = 'white';
  iconColor59 = 'white';
  iconColor60 = 'white';
  iconColorA = "white"
  iconColorNA = "red"
  iconColorRE = "#7FFF00"
  iconColorvar = 'white';

  constructor(
    private router: Router,
    private alertController: AlertController,
    public afstore: AngularFirestore
  ) { 
    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP01').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor1 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor1 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor1 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor1 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP03').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor3 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor3 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor3 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor3 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP05').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor5 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor5 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor5 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor5 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP07').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor7 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor7 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor7 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor7 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP09').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor9 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor9 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor9 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor9 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP11').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor11 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor11 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor11 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor11 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP12').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor12 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor12 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor12 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor12 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP13').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor13 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor13 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor13 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor13 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP14').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor14 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor14 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor14 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor14 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP15').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor15 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor15 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor15 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor15 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP16').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor16 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor16 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor16 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor16 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP17').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor17 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor17 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor17 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor17 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP18').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor18 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor18 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor18 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor18 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP19').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor19 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor19 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor19 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor19 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP20').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor20 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor20 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor20 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor20 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP21').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor21 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor21 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor21 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor21 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP22').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor22 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor22 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor22 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor22 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP23').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor23 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor23 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor23 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor23 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP24').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor24 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor24 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor24 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor24 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP25').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor25 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor25 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor25 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor25 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP26').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor26 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor26 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor26 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor26 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP27').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor27 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor27 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor27 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor27 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    // for (let i = 1; i < 61; i++) {
    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP28').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor28 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor28 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor28 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor28 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });



    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP29').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor29 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor29 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor29 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor29 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP30').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor30 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor30 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor30 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor30 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP31').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor31 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor31 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor31 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor31 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP32').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor32 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor32 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor32 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor32 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP33').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor33 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor33 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor33 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor33 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP34').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor34 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor34 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor34 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor34 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP35').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor35 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor35 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor35 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor35 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP36').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor36 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor36 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor36 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor36 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP37').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor37 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor37 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor37 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor37 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP38').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor38 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor38 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor38 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor38 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP39').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor39 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor39 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor39 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor39 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP40').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor40 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor40 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor40 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor40 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP41').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor41 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor41 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor41 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor41 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP42').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor42 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor42 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor42 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor42 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP43').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor43 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor43 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor43 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor43 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP44').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor44 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor44 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor44 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor44 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP45').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor45 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor45 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor45 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor45 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP46').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor46 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor46 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor46 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor46 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP47').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor47 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor47 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor47 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor47 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP48').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor48 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor48 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor48 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor48 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP49').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor49 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor49 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor49 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor49 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP50').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor50 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor50 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor50 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor50 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP51').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor51 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor51 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor51 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor51 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP52').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor52 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor52 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor52 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor52 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP53').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor53 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor53 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor53 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor53 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP54').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor54 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor54 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor54 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor54 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP55').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor55 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor55 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor55 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor55 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP56').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor56 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor56 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor56 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor56 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP57').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor57 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor57 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor57 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor57 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP58').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor58 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor58 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor58 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor58 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP59').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor59 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor59 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor59 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor59 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP60').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor60 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor60 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor60 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor60 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP61').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColorvar = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColorvar = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColorvar = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColorvar = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


  }

  ngOnInit() { }
  return() {
    this.router.navigate(['manage-sys']);
  }

  async returnSpot(spot: string) {
    var License = JSON.parse(localStorage.getItem('tempLic'))
    this.selectedSpot = spot;
    var snapshotResult = this.afstore.collection('parkingSpace', ref => ref.where('spaceNbr', '==', spot).where('status', '==', true).where('reserved', '==', false).limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton = snapshotResult.subscribe(doc => {
          this.freeSpace = <p_spaceI>doc.payload.doc.data();
          this.docRef = doc.payload.doc.ref;
          subscripton.unsubscribe();
            console.log(this.freeSpace.parkID);
            this.afstore.collection('parkingSpace').doc(this.freeSpace.parkID).update({
              status: false
            })

            this.afstore.collection('o_users').doc(License).set({
              userLicNbr: License,
              userid: JSON.parse(localStorage.getItem('tempID')),
              parkID: this.freeSpace.parkID
            });
          

        });
      
      const alert = await this.alertController.create({
        header: 'Notification',
        subHeader: 'New Spot Selected',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(['manage-sys']);

      await this.stall(1000);
      localStorage.setItem('tempLic',null);
      localStorage.setItem('tempID',null);
  }
  stall(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
