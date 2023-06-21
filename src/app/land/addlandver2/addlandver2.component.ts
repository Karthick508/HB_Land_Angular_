import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';


export interface Root {
  landDigitDataEntity: LandDigitDataEntity
  lpsTabDetails: LpsTabDetail[]
  fourOneTabDeatils: FourOneTabDeatil[]
  sixDdTabDeatils: SixDdTabDeatil[]
  awardTabDeatils: AwardTabDeatil[]
  leftoverTabDeatils: LeftoverTabDeatil[]
}

export interface LandDigitDataEntity {
  mode : string | null
  n_ID: number
  v_NAME_OF_DIVISION: string
  v_NAME_OF_DISTRICT: string
  v_NAME_OF_CIRCLE: string
  v_NAME_OF_GEO_TAGGING: string
  v_NAME_OF_SCHEME: string
  n_UNIQUE_ID: number
}

export interface LpsTabDetail {
  lpsVillageDetails: LpsVillageDetail[]
  lpsFileDynamicValuesDetails: LpsFileDynamicValuesDetail[]
  dynamicValuesDetails: DynamicValuesDetail[]
  n_ID: number
  n_UNIQUE_ID: number
  v_TOTAL_EXTENT: string
  v_FILE_PATH: string
  v_FILE_NAME: string
  v_REF_NO: string
}

export interface LpsVillageDetail {
  n_ID: number
  v_NAME_OF_VILLAGE: string
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_EXTENT: string
  v_SURVEY_NO: string
}

export interface LpsFileDynamicValuesDetail {
  n_ID: number
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_FILE_PATH: string
  v_FILE_NAME: string
}

export interface DynamicValuesDetail {
  n_ID: number
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_COLUMN_NAME: string
}

export interface FourOneTabDeatil {
  fourOneDynamicFileEntityDetails: FourOneDynamicFileEntityDetail[]
  dynamicValuesDetails: DynamicValuesDetail2[]
  n_ID: number
  d_DATE_OF_4_ONE_GO: string
  v_FILE_1_FILENAME: string
  v_FILE_1_FILEPATH: string
  d_DATE_OF_LOCALITY: string
  v_FILE_2_FILEPATH: string
  d_DATE_OF_GAZETTE_NOTIFICATION: string
  v_FILE_2_FILENAME: string
  v_4_ONE_GO_REF_NO: string
  v_GAZETTE_REF_NO: string
  n_UNIQUE_ID: number
  v_TOTAL_EXTENT: string
  v_REF_NO: string
}

export interface FourOneDynamicFileEntityDetail {
  n_ID: number
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_FILE_PATH: string
  v_FILE_NAME: string
  v_SURVEY_NO: string
  v_SOUTH: string
  v_WEST: string
  v_NAME_OF_OWNER: string
  v_NORTH: string
  v_EAST: string
}

export interface DynamicValuesDetail2 {
  n_ID: number
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_COLUMN_NAME: string
}

export interface SixDdTabDeatil {
  sixDdDynamicFileEntityValuesDetails: SixDdDynamicFileEntityValuesDetail[]
  dynamicValuesDetails: DynamicValuesDetail3[]
  n_ID: number
  v_FILE_1_FILENAME: string
  v_FILE_1_FILEPATH: string
  d_DATE_OF_LOCALITY: string
  v_FILE_2_FILEPATH: string
  d_DATE_OF_GAZETTE_NOTIFICATION: string
  v_FILE_2_FILENAME: string
  v_GAZETTE_REF_NO: string
  d_DATE_OF_6DD_GO: string
  n_UNIQUE_ID: number
  v_TOTAL_EXTENT: string
  v_REF_NO: string
  v_6DD_GO_REF_NO: string
}

export interface SixDdDynamicFileEntityValuesDetail {
  n_ID: number
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_EXTENT: any
  v_SURVEY_NO: string
  v_NAME_OF_OWNER: string
}

export interface DynamicValuesDetail3 {
  n_ID: number
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_COLUMN_NAME: string
}

export interface AwardTabDeatil {
  awardOtherFileEntityValuesDetails: AwardOtherFileEntityValuesDetail[]
  dynamicValuesDetails: DynamicValuesDetail4[]
  awardDirectPaymentEntityValuesDetails: AwardDirectPaymentEntityValuesDetail[]
  awardRevenuePaymentEntityValuesDetails: AwardRevenuePaymentEntityValuesDetail[]
  awardCourtDepositPaymentEntityValuesDetails: AwardCourtDepositPaymentEntityValuesDetail[]
  awardPossessionTakenOverEntityValuesDetails: AwardPossessionTakenOverEntityValuesDetail[]
  awardPossessionNotTakenOverEntityValuesDetails: AwardPossessionNotTakenOverEntityValuesDetail[]
  awardPossessionExtentAvailableEntityValuesDetails: AwardPossessionExtentAvailableEntityValuesDetail[]
  n_ID: number
  v_PHO_SCHEME_TOTAL_EXTENT: string
  v_PHO_TOTAL_EXTENT: string
  v_PNHO_TOTAL_EXTENT: string
  n_TOTAL_AWARD_AMOUNT: number
  n_UNIQUE_ID: number
  v_TOTAL_EXTENT: string
  v_FILE_PATH: string
  v_AWARD_NO: string
  v_FILE_NAME: string
  d_AWARD_DATE: string
}

export interface AwardOtherFileEntityValuesDetail {
  n_ID: number
  v_LEGAL_PROCEEDING: string
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_FILE_PATH: string
  v_FILE_NAME: string
  v_EXTENT: string
}

export interface DynamicValuesDetail4 {
  n_ID: number
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_COLUMN_NAME: string
}

export interface AwardDirectPaymentEntityValuesDetail {
  n_ID: number
  v_NOTIFIED_PERSON: string
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_AMOUNT: number
}

export interface AwardRevenuePaymentEntityValuesDetail {
  n_ID: number
  v_NOTIFIED_PERSON: string
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_AMOUNT: number
}

export interface AwardCourtDepositPaymentEntityValuesDetail {
  n_ID: number
  v_NOTIFIED_PERSON: string
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_AMOUNT: number
}

export interface AwardPossessionTakenOverEntityValuesDetail {
  n_ID: number
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_TOTAL_EXTENT: string
  v_SURVEY_NO: string
}

export interface AwardPossessionNotTakenOverEntityValuesDetail {
  n_ID: number
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_TOTAL_EXTENT: string
  v_SURVEY_NO: string
}

export interface AwardPossessionExtentAvailableEntityValuesDetail {
  n_ID: number
  n_FILE_ID: number
  n_UNIQUE_ID: number
  v_TOTAL_EXTENT: string
  v_SURVEY_NO: string
}

export interface LeftoverTabDeatil {
  left4One6DDEntityDetails: Left4One6DdentityDetail[]
  left6DDAwardRepoEntityDetails: Left6DdawardRepoEntityDetail[]
  n_ID: number
  n_UNIQUE_ID: number
  v_EXTENT: string
  v_SURVEY_NO: string
}

export interface Left4One6DdentityDetail {
  n_ID: number
  n_UNIQUE_ID: number
  v_EXTENT: string
  v_SURVEY_NO: string
}

export interface Left6DdawardRepoEntityDetail {
  n_ID: number
  n_UNIQUE_ID: number
  v_EXTENT: string
  v_SURVEY_NO: string
}

@Component({
  selector: 'app-addlandver2',
  templateUrl: './addlandver2.component.html',
  styleUrls: ['./addlandver2.component.css']
})
export class Addlandver2Component {


  isPanel1Expanded = false;
  isPanel2Expanded = false;
  isPanel3Expanded = false;
  isPanel4Expanded = false;
  LPSFormGroup: FormGroup;
  expansionPanelsArray: FormArray;

  @ViewChild('stepper') stepper: MatStepper;

  index = 0;

  togglePanel1() {
    this.isPanel1Expanded = !this.isPanel1Expanded;
  }

  togglePanel2() {
    this.isPanel2Expanded = !this.isPanel2Expanded;
  }
  togglePanel3() {
    this.isPanel2Expanded = !this.isPanel2Expanded;
  }
   togglePanel4() {
    this.isPanel2Expanded = !this.isPanel2Expanded;
  }

  personalInfoFormGroup!: FormGroup;

  fourOneFormGroup: FormGroup;
  expansionPanelsArray4: FormArray;

  sixDDFormGroup:FormGroup;
  expansionPanelsSixDD:FormArray;

  awardInfoFormGroup!: FormGroup;
  expansionPanelsAward : FormArray

  leftInfoFormGroup!: FormGroup;
  expansionPanelsLeft : FormArray

  constructor(private builder: FormBuilder, private formBuilder: FormBuilder) { }
  isLinear = true;

  ngOnInit(): void {
   
    this.personalInfoFormGroup = this.formBuilder.group({
      v_name_of_circle: ['', Validators.required],
      v_name_of_scheme: ['', Validators.required],
      v_name_of_division: ['', Validators.required],
      v_name_of_geo_tagging: [''],
      v_name_of_district: ['', Validators.required],

    });



  // LPS FORM
    this.LPSFormGroup = this.formBuilder.group({
      expansionPanels: this.formBuilder.array([])
    });

    this.expansionPanelsArray = this.LPSFormGroup.get('expansionPanels') as FormArray;
    this.addExpansionPanel();
    this.addFiles(0,'lps');

// 4one
    this.fourOneFormGroup = this.formBuilder.group({
      expansionPanels4: this.formBuilder.array([])
    });

    this.expansionPanelsArray4 = this.fourOneFormGroup.get('expansionPanels4') as FormArray;
    this.addExpansionPanel4One();

    // 6DD
    this.sixDDFormGroup = this.formBuilder.group({
      expansionPanelsSix: this.formBuilder.array([])
    });

    this.expansionPanelsSixDD = this.sixDDFormGroup.get('expansionPanelsSix') as FormArray;
    this.addExpansionPanelSixDD();

   // Award
    this.awardInfoFormGroup = this.formBuilder.group({
      expansionPanelsAward : this.formBuilder.array([]),
    });

    this.expansionPanelsAward = this.awardInfoFormGroup.get('expansionPanelsAward') as FormArray;
    this.addExpansionPanelAward();

    // LeftOver
    this.leftInfoFormGroup = this.formBuilder.group({
      expansionPanelsLeft : this.formBuilder.array([]),
    });

    this.expansionPanelsLeft = this.leftInfoFormGroup.get('expansionPanelsLeft') as FormArray;
    this.addExpansionPanelLeft();



  }



  addExpansionPanel4One() {
    const expansionPanel4One = this.formBuilder.group({
      file: null,
      file2: null,
      v_gazette_ref_no: [''],
      v_4_one_go_ref_no: [''],
      d_date_of_4_one_go: [''],
      d_date_of_gazette_notification: [''],
      d_date_of_locality	: [''],
      v_ref_no: [''],
      v_total_extent: [''],
      repeatedFields: this.formBuilder.array([]),
      ownerFields : this.formBuilder.array([])

    });

    this.expansionPanelsArray4.push(expansionPanel4One);
  }

  addExpansionPanelSixDD() {
    const expansionPanelSix = this.formBuilder.group({
      file: null,
      file2: null,
      v_gazette_ref_no: [''],
      v_6dd_go_ref_no: [''],
      d_date_of_6dd_go: [''],
      d_date_of_gazette_notification: [''],
      d_date_of_locality: [''],
      v_ref_no: [''],
      v_total_extent: [''],
      repeatedFields: this.formBuilder.array([]),
      sixddFields: this.formBuilder.array([])
    });
    this.expansionPanelsSixDD.push(expansionPanelSix);
  }

  addExpansionPanelAward() {
    const expansionPanelAward = this.formBuilder.group({
      file: null,
      v_award_no: [''],
      d_award_date: [''],
      v_total_extent: [''],
      n_total_award_amount: [''],
      repeatedFields: this.formBuilder.array([]),
      directpayFields: this.formBuilder.array([]),
      revenuepayFields: this.formBuilder.array([]),
      civilpayFields: this.formBuilder.array([]),
      phoFields: this.formBuilder.array([]),
      pho_v_total_extent : [''],
      pnho_v_total_extent : [''],
      phoschme_v_total_extent : [''],
      court_v_extent: [''],
      court_v_legal_proceeding: [''],
      court_file: null,
      road_v_extent: [''],
      road_v_legal_proceeding: [''],
      road_file: null,
      enchro_v_extent: [''],
      enchro_v_legal_proceeding: [''],
      enchro_file: null,
      scatt_v_extent: [''],
      scatt_v_legal_proceeding: [''],
      scatt_file: null,
      quash_v_extent: [''],
      quash_v_legal_proceeding: [''],
      quash_file: null,
      recon_v_extent: [''],
      recon_v_legal_proceeding: [''],
      recon_file: null,
      noc_v_extent: [''],
      noc_v_legal_proceeding: [''],
      noc_file: null,
      phoschemeFields: this.formBuilder.array([]),
      pnhoFields: this.formBuilder.array([]),
      pnho_court_v_extent: [''],
      pnho_court_v_legal_proceeding: [''],
      pnho_court_file: null,
      pnho_enchro_v_extent: [''],
      pnho_enchro_v_legal_proceeding: [''],
      pnho_enchro_file: null,
      pnho_quash_v_extent: [''],
      pnho_quash_v_legal_proceeding: [''],
      pnho_quash_file: null,
      pnho_encumbr_v_extent: [''],
      pnho_encumbr_v_legal_proceeding: [''],
      pnho_encumbr_file: null,

    });
    this.expansionPanelsAward.push(expansionPanelAward);
  }


  addExpansionPanelLeft() {
    const expansionPanelLeft = this.formBuilder.group({

      left_lps_4oneFields: this.formBuilder.array([]),
      left_4one_6ddFields: this.formBuilder.array([]),
      left_6dd_awardFields: this.formBuilder.array([]),

    });
    this.expansionPanelsLeft.push(expansionPanelLeft);
  }



  removeLastRepeatedField(type) {
    if (this.expansionPanelsArray.length > 0 && type === 'lps') {
      this.expansionPanelsArray.removeAt(this.expansionPanelsArray.length - 1);
    }  else if (this.expansionPanelsArray4.length > 0 && type === '4(1)') {
      this.expansionPanelsArray4.removeAt(this.expansionPanelsArray4.length - 1);
    }else if(this.expansionPanelsSixDD.length > 0 && type ==='6DD'){
      this.expansionPanelsSixDD.removeAt(this.expansionPanelsSixDD.length - 1);
    }
    else if(this.expansionPanelsAward.length > 0 && type ==='Award'){
      this.expansionPanelsAward.removeAt(this.expansionPanelsAward.length - 1);
    }
  }

  addExpansionPanel() {
    const expansionPanel = this.formBuilder.group({
      files: this.formBuilder.array([]),
      v_ref_no: [''],
      v_total_extent: [''],
      repeatedFields: this.formBuilder.array([]),
      villageFields: this.formBuilder.array([]),


    });
    this.expansionPanelsArray.push(expansionPanel);
  }

  onFileChange(event: any, panelIndex: number, type) {
    const file = event.target.files && event.target.files.length > 0 ? event.target.files[0] : null;
    if (type === 'lps') {
      const panelFormGroup = this.expansionPanelsArray.at(panelIndex) as FormGroup;
      if (file) {
        const prefix = type; // Specify your desired prefix here
        const suffix = panelIndex
        const fileNameWithPrefix = prefix + '_' + file.name + '_' + suffix;
        const prefixedFile = new File([file], fileNameWithPrefix, { type: file.type });
        panelFormGroup.get('file').setValue(prefixedFile);
      } else {
        panelFormGroup.get('file').setValue(null);
      }
    } else if(type=== '4(1)'){
      const panelFormGroup = this.expansionPanelsArray4.at(panelIndex) as FormGroup;
      if (file) {
        const prefix = type; // Specify your desired prefix here
        const suffix = panelIndex
        const fileNameWithPrefix = prefix + '_' + file.name + '_' + suffix;
        const prefixedFile = new File([file], fileNameWithPrefix, { type: file.type });
        panelFormGroup.get('file').setValue(prefixedFile);
      } else {
        panelFormGroup.get('file').setValue(null);
      }
    }else if(type ==='6DD'){
      const panelFormGroup = this.expansionPanelsSixDD.at(panelIndex) as FormGroup;
      if (file) {
        const prefix = type; // Specify your desired prefix here
        const suffix = panelIndex
        const fileNameWithPrefix = prefix + '_' + file.name + '_' + suffix;
        const prefixedFile = new File([file], fileNameWithPrefix, { type: file.type });
        panelFormGroup.get('file').setValue(prefixedFile);
    }else {
      panelFormGroup.get('file').setValue(null);
    }
  }

  }

  submit() {
    console.log(this.personalInfoFormGroup.value);
    console.log(this.LPSFormGroup.value)

    console.log(this.fourOneFormGroup.value)
     console.log(this.sixDDFormGroup.value)
  }
  removeExpansionPanel(index: number, type) {
    if (type === 'lps') {
      this.expansionPanelsArray.removeAt(index);
    } else if(type === '4(1)'){
      this.expansionPanelsArray4.removeAt(index)
    }else if(type === '6DD'){
      this.expansionPanelsSixDD.removeAt(index)
    }
    else if(type === 'Award'){
      this.expansionPanelsAward.removeAt(index)
    }
  }

  addFiles(expansionPanelIndex: number,type){
    let expansionPanel;
    let filesArray;
    if (type === 'lps') {
      expansionPanel = this.expansionPanelsArray.at(expansionPanelIndex) as FormGroup;
      filesArray = expansionPanel.get('files') as FormArray;
    }
    const repeatedField = this.formBuilder.group({
      filelps: [''],
    });
    filesArray.push(repeatedField);

  }

  addRepeatedField(expansionPanelIndex: number, type) {
    let expansionPanel;
    let repeatedFieldsArray;
    if (type === 'lps') {
      expansionPanel = this.expansionPanelsArray.at(expansionPanelIndex) as FormGroup;
      repeatedFieldsArray = expansionPanel.get('repeatedFields') as FormArray;
    } else if(type === '4(1)'){
      expansionPanel = this.expansionPanelsArray4.at(expansionPanelIndex) as FormGroup;
      repeatedFieldsArray = expansionPanel.get('repeatedFields') as FormArray;
    }else if(type === '6DD'){
      expansionPanel = this.expansionPanelsSixDD.at(expansionPanelIndex) as FormGroup;
      repeatedFieldsArray = expansionPanel.get('repeatedFields') as FormArray;
    }
    else if(type === 'Award'){
      expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
      repeatedFieldsArray = expansionPanel.get('repeatedFields') as FormArray;
    }
    const repeatedField = this.formBuilder.group({
      field1: [''],
      field2: ['']
    });

    repeatedFieldsArray.push(repeatedField);
  }

  addVillageLps(expansionPanelIndex: number) {
    let expansionPanel;
    let villageFieldsArray;
     {
      expansionPanel = this.expansionPanelsArray.at(expansionPanelIndex) as FormGroup;
      villageFieldsArray = expansionPanel.get('villageFields') as FormArray;
    }
    const villageField = this.formBuilder.group({
      v_name_of_village: [''],
      villageNoFields:this.formBuilder.array([this.createVillageNoField()]),
     
    });
    villageFieldsArray.push(villageField);
  }

  createVillageNoField(): FormGroup {
    return this.formBuilder.group({
      v_survey_no: [''],
      v_extent: ['']
    });
  }

  addVillageNoField(expansionPanelIndex: number, villageFieldIndex: number) {
    const expansionPanel = this.expansionPanelsArray.at(expansionPanelIndex) as FormGroup;
    const villageFieldsArray = expansionPanel.get('villageFields') as FormArray;
    const villageField = villageFieldsArray.at(villageFieldIndex) as FormGroup;
    const villageNoFieldsArray = villageField.get('villageNoFields') as FormArray;
  
    villageNoFieldsArray.push(this.createVillageNoField());
  }
  
  removeVillageNoField(expansionPanelIndex: number, villageFieldIndex: number, villageNoFieldIndex: number) {
    const expansionPanel = this.expansionPanelsArray.at(expansionPanelIndex) as FormGroup;
    const villageFieldsArray = expansionPanel.get('villageFields') as FormArray;
    const villageField = villageFieldsArray.at(villageFieldIndex) as FormGroup;
    const villageNoFieldsArray = villageField.get('villageNoFields') as FormArray;
  
    villageNoFieldsArray.removeAt(villageNoFieldIndex);
  }
  

  addOwner4one(expansionPanelIndex: number) {
    const expansionPanel = this.expansionPanelsArray4.at(expansionPanelIndex) as FormGroup;
    const ownerFieldsArray = expansionPanel.get('ownerFields') as FormArray;
    const ownerField = this.formBuilder.group({
      v_survey_no: [''],
      v_extent: [''],
      v_name_of_owner: [''],
      v_east: [''],
      v_west: [''],
      v_north: [''],
      v_south: [''],
    });

    ownerFieldsArray.push(ownerField);
  }



  addsixdd(expansionPanelIndex: number) {
    const expansionPanel = this.expansionPanelsSixDD.at(expansionPanelIndex) as FormGroup;
    const sixddFieldsArray = expansionPanel.get('sixddFields') as FormArray;

    const sixddField = this.formBuilder.group({
      v_survey_no: [''],
      v_extent: ['']
    });

    sixddFieldsArray.push(sixddField);
  }

  removeFiles(expansionPanelIndex: number, repeatedFieldIndex: number, type) {
    let expansionPanel;
    let filesArray;
    if (type === 'lps') {
      expansionPanel = this.expansionPanelsArray.at(expansionPanelIndex) as FormGroup;
      filesArray = expansionPanel.get('files') as FormArray;
    } 
    filesArray.removeAt(repeatedFieldIndex);

  }
  adddirectpay(expansionPanelIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const directpayFieldsArray = expansionPanel.get('directpayFields') as FormArray;

    const directpayField = this.formBuilder.group({
      v_amount: [''],
      v_notified_person: ['']
    });

    directpayFieldsArray.push(directpayField);
  }

  addrevenuepay(expansionPanelIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const revenuepayFieldsArray = expansionPanel.get('revenuepayFields') as FormArray;

    const revenuepayField = this.formBuilder.group({
      v_amount: [''],
      v_notified_person: ['']
    });

    revenuepayFieldsArray.push(revenuepayField);
  }

  addcivilpay(expansionPanelIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const civilpayFieldsArray = expansionPanel.get('civilpayFields') as FormArray;

    const civilpayField = this.formBuilder.group({
      v_amount: [''],
      v_notified_person: ['']
    });

    civilpayFieldsArray.push(civilpayField);
  }

  addpho(expansionPanelIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const phoFieldsArray = expansionPanel.get('phoFields') as FormArray;

    const phoField = this.formBuilder.group({
      v_survey_no: [''],
      v_total_extent: ['']
    });

    phoFieldsArray.push(phoField);
  }

  addphoscheme(expansionPanelIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const phoschemeFieldsArray = expansionPanel.get('phoschemeFields') as FormArray;

    const phoschemeField = this.formBuilder.group({
      v_survey_no: [''],
      v_total_extent: ['']
    });

    phoschemeFieldsArray.push(phoschemeField);
  }


  addpnho(expansionPanelIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const pnhoFieldsArray = expansionPanel.get('pnhoFields') as FormArray;

    const pnhoField = this.formBuilder.group({
      v_survey_no: [''],
      v_total_extent: ['']
    });

    pnhoFieldsArray.push(pnhoField);
  }

  leftlpsand4one(expansionPanelIndex: number) {
    const expansionPanel = this.expansionPanelsLeft.at(expansionPanelIndex) as FormGroup;
    const left_lps_4oneFieldsArray = expansionPanel.get('left_lps_4oneFields') as FormArray;

    const left_lps_4oneField = this.formBuilder.group({
      v_survey_no: [''],
      v_extent: ['']
    });

    left_lps_4oneFieldsArray.push(left_lps_4oneField);
  }

  left4oneand6dd(expansionPanelIndex: number) {
    const expansionPanel = this.expansionPanelsLeft.at(expansionPanelIndex) as FormGroup;
    const left_4one_6ddFieldsArray = expansionPanel.get('left_4one_6ddFields') as FormArray;

    const left_4one_6ddField = this.formBuilder.group({
      v_survey_no: [''],
      v_extent: ['']
    });

    left_4one_6ddFieldsArray.push(left_4one_6ddField);
  }

  left6ddandaward(expansionPanelIndex: number) {
    const expansionPanel = this.expansionPanelsLeft.at(expansionPanelIndex) as FormGroup;
    const left_6dd_awardFieldsArray = expansionPanel.get('left_6dd_awardFields') as FormArray;

    const left_6dd_awardField = this.formBuilder.group({
      v_survey_no: [''],
      v_extent: ['']
    });

    left_6dd_awardFieldsArray.push(left_6dd_awardField);
  }

  removeRepeatedField(expansionPanelIndex: number, repeatedFieldIndex: number, type) {
    let expansionPanel;
    let repeatedFieldsArray;
    if (type === 'lps') {
      expansionPanel = this.expansionPanelsArray.at(expansionPanelIndex) as FormGroup;
      repeatedFieldsArray = expansionPanel.get('repeatedFields') as FormArray;
    } else if (type === '4(1)') {
      expansionPanel = this.expansionPanelsArray4.at(expansionPanelIndex) as FormGroup;
      repeatedFieldsArray = expansionPanel.get('repeatedFields') as FormArray;
    }else if (type === '6DD') {
      expansionPanel = this.expansionPanelsSixDD.at(expansionPanelIndex) as FormGroup;
      repeatedFieldsArray = expansionPanel.get('repeatedFields') as FormArray;
    }
    else if (type === 'Award') {
      expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
      repeatedFieldsArray = expansionPanel.get('repeatedFields') as FormArray;
    }

    repeatedFieldsArray.removeAt(repeatedFieldIndex);
  }

  removeVillageLps(expansionPanelIndex: number, villageFieldIndex: number) {
    let expansionPanel;
    let villageFieldsArray;
     {
      expansionPanel = this.expansionPanelsArray.at(expansionPanelIndex) as FormGroup;
      villageFieldsArray = expansionPanel.get('villageFields') as FormArray;
    }

    villageFieldsArray.removeAt(villageFieldIndex);
  }

  removeOwner4one(expansionPanelIndex: number, ownerFieldIndex: number) {

    const  expansionPanel = this.expansionPanelsArray4.at(expansionPanelIndex) as FormGroup;
    const  ownerFieldsArray = expansionPanel.get('ownerFields') as FormArray;

    ownerFieldsArray.removeAt(ownerFieldIndex);
  }

  removesixdd(expansionPanelIndex: number, sixddFieldIndex: number) {
    const expansionPanel = this.expansionPanelsSixDD.at(expansionPanelIndex) as FormGroup;
    const sixddFieldsArray = expansionPanel.get('sixddFields') as FormArray;

    sixddFieldsArray.removeAt(sixddFieldIndex);
  }

  removedirectpay(expansionPanelIndex: number, directpayFieldIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const directpayFieldsArray = expansionPanel.get('directpayFields') as FormArray;

    directpayFieldsArray.removeAt(directpayFieldIndex);
  }

  removerevenuepay(expansionPanelIndex: number, revenuepayFieldIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const revenuepayFieldsArray = expansionPanel.get('revenuepayFields') as FormArray;

    revenuepayFieldsArray.removeAt(revenuepayFieldIndex);
  }

  removecivilpay(expansionPanelIndex: number, civilpayFieldIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const civilpayFieldsArray = expansionPanel.get('civilpayFields') as FormArray;

    civilpayFieldsArray.removeAt(civilpayFieldIndex);
  }

  removepho(expansionPanelIndex: number, phoFieldIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const phoFieldsArray = expansionPanel.get('phoFields') as FormArray;

   phoFieldsArray.removeAt(phoFieldIndex);
  }

  removephoscheme(expansionPanelIndex: number, phoschemeFieldIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const phoschemeFieldsArray = expansionPanel.get('phoschemeFields') as FormArray;

    phoschemeFieldsArray.removeAt(phoschemeFieldIndex);
  }

  removepnho(expansionPanelIndex: number, pnhoFieldIndex: number) {
    const expansionPanel = this.expansionPanelsAward.at(expansionPanelIndex) as FormGroup;
    const pnhoFieldsArray = expansionPanel.get('pnhoFields') as FormArray;

   pnhoFieldsArray.removeAt(pnhoFieldIndex);
  }




  panelOpenState = false;   // mat expansion panel in Lps

  // Lps input field - start
  lpsFields: any[] = [];

  addLpsField() {
    const newLpsField = 'New Lps Field';
    this.lpsFields.push(newLpsField);
  }

  removeLpsField(index: number) {
    this.lpsFields.splice(index, 1);
  }
  // Lps input field - end

  // Lps form addition - start
  lpsForms: any[] = [];

  addLpsForm() {
    const newLpsIndex = this.lpsForms.length + 2;
    const newLpsForm = { index: newLpsIndex, value: '' };
    this.lpsForms.push(newLpsForm);
  }

  lpsFields2: any[] = [];

  addLpsField2() {
    const newLpsField2 = 'New Lps Field2';
    this.lpsFields2.push(newLpsField2);
  }

  removeLpsField2(index: number) {
    this.lpsFields2.splice(index, 1);
  }

  adds: any[] = [];

 

  removeSurvey(index: number) {
    this.adds.splice(index, 1);
  }

  adds2: any[] = [];

  addsurvey2() {
    const addsurvey2 = 'Add Survey Field2';
    this.adds2.push(addsurvey2);
  }

  removeSurvey2(index: number) {
    this.adds2.splice(index, 1);
  }




  // Lps form addition - end



  // Four input field - start
  fourFields: any[] = [];

  addFourField() {
    const newFourField = 'New Four Field';
    this.fourFields.push(newFourField);
  }

  removeFourField(index: number) {
    this.fourFields.splice(index, 1);
  }
  // Four input field - end

  // Four form addition - start
  fourForms: any[] = [];

  addFourForm() {
    const newFourIndex = this.fourForms.length + 2;
    const newFourForm = { index: newFourIndex, value: '' };
    this.fourForms.push(newFourForm);
  }

  fourFields2: any[] = [];

  addFourField2() {
    const newFourField2 = 'New Four Field2';
    this.fourFields2.push(newFourField2);
  }

  removeFourField2(index: number) {
    this.fourFields2.splice(index, 1);
  }
  // Four form addition - end


  // Dd input field - start
  ddFields: any[] = [];

  addDdField() {
    const newDdField = 'New Dd Field';
    this.ddFields.push(newDdField);
  }

  removeDdField(index: number) {
    this.ddFields.splice(index, 1);
  }
  // Dd input field - end

  // Dd form addition - start
  ddForms: any[] = [];

  addDdForm() {
    const newDdIndex = this.ddForms.length + 2;
    const newDdForm = { index: newDdIndex, value: '' };
    this.ddForms.push(newDdForm);
  }

  ddFields2: any[] = [];

  addDdField2() {
    const newDdField2 = 'New Dd Field2';
    this.ddFields2.push(newDdField2);
  }

  removeDdField2(index: number) {
    this.ddFields2.splice(index, 1);
  }
  // Dd form addition - end


  //left over add-start
  leftForms1: string[] = [];
  leftForms2: string[] = [];
  leftForms3: string[] = [];

  addLeftForm1() {
    const newLeftForm1 = 'New Left Form1';
    this.leftForms1.push(newLeftForm1);
  }

  addLeftForm2() {
    const newLeftForm2 = 'New Left Form2';
    this.leftForms2.push(newLeftForm2);
  }

  addLeftForm3() {
    const newLeftForm3 = 'New Left Form3';
    this.leftForms3.push(newLeftForm3);
  }
  //left over add-end

  //left over remove-start
  removeLeftForm1(index: number) {
    this.leftForms1.splice(index, 1);
  }

  removeLeftForm2(index: number) {
    this.leftForms2.splice(index, 1);
  }

  removeLeftForm3(index: number) {
    this.leftForms3.splice(index, 1);
  }
  //left over remove-end


}
