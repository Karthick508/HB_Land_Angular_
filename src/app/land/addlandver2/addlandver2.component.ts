import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-addlandver2',
  templateUrl: './addlandver2.component.html',
  styleUrls: ['./addlandver2.component.css']
})
export class Addlandver2Component {


  

  @ViewChild('stepper') stepper: MatStepper;

  index = 0;

  personalInfoFormGroup!: FormGroup;

  LPSFormGroup: FormGroup;
  expansionPanelsArray: FormArray;

  fourOneFormGroup: FormGroup;
  expansionPanelsArray4: FormArray;

  sixDDFormGroup:FormGroup;
  expansionPanelsSixDD:FormArray;

  awardInfoFormGroup!: FormGroup;
  expansionPanelsAward : FormArray

  panelOneForm: FormGroup;
  panelTwoForm: FormGroup;
  panelThreeForm: FormGroup;

  constructor(private builder: FormBuilder, private formBuilder: FormBuilder) { }
  isLinear = true;

  ngOnInit(): void {
  //  Personal Info
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

    // Left Over
    this.panelOneForm = this.formBuilder.group({
      lpsand4oneleft: this.formBuilder.array([
        this.createItemLeft()
      ])
    });

    this.panelTwoForm = this.formBuilder.group({
      fouroneand6ddleft: this.formBuilder.array([
        this.createItemLeft()
      ])
    });
    
    this.panelThreeForm = this.formBuilder.group({
      sixdandawardleft: this.formBuilder.array([
        this.createItemLeft()
      ])
    });
  }

  createItemLeft(): FormGroup {
    return this.formBuilder.group({
      v_survey_no: '',
      v_total_extent: ''
    });
  }

  get panelOneItems() {
    return this.panelOneForm.get('lpsand4oneleft') as FormArray;
  }

  get panelTwoItems() {
    return this.panelTwoForm.get('fouroneand6ddleft') as FormArray;
  }

  get panelThreeItems() {
    return this.panelThreeForm.get('sixdandawardleft') as FormArray;
  }
 
  addFields(formArray: FormArray) {
    formArray.push(this.createItemLeft());
  }

  removeFieldss(formArray: FormArray, index: number) {
    formArray.removeAt(index);
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

  removeVillageLps(expansionPanelIndex: number) {
    let expansionPanel;
    let villageFieldsArray;
     {
      expansionPanel = this.expansionPanelsArray.at(expansionPanelIndex) as FormGroup;
      villageFieldsArray = expansionPanel.get('villageFields') as FormArray;
    }
    villageFieldsArray.removeAt(expansionPanelIndex);
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

  submit() {
    console.log(this.personalInfoFormGroup.value);
    console.log(this.LPSFormGroup.value)

    console.log(this.fourOneFormGroup.value)
     console.log(this.sixDDFormGroup.value)
  }
}
