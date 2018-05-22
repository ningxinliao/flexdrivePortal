class Subscription { 
    // get page objects
    get FILTER_BY_ALL () { return $('//*[text()="All"]'); }
    get FILTER_BY_PENDING () { return $('//*[text()="Pending"]'); }
    get FILTER_BY_ON_SUBSCRIPTION () { return $('//*[text()="On Subscription"]'); }
    get FILTER_BY_CLOSED () { return $('//*[text()="Closed"]'); }
    get FILTER_BY_CANCELED () { return $('//*[text()="Canceled"]'); }
    get MODAL_POPOVER () { return $('div.ModalPopover__ModalBody'); } 
    get DISSMISS_MODAL () { return $('a.ModalPopover__ModalClose'); }
    get NEXT_PAGE () { return $('//*[text()[contains(., "Next")]]'); }
    get PREVIOUS_PAGE () { return $('//*[text()[contains(., "Previous")]]'); } 
    get PAGE_THREE () { return $('//*[text()="3"]'); }


}