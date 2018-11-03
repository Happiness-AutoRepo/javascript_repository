var Slick = function(){
    this.title = 'SanDisk | Global Leader in Flash Memory Storage Solutions';
    this.slickDots = $$('.slick-dots li');
    this.slickTrackLinks = $$('.slick-track a');
    
    this.globalIcon = $('.icon-global');
    this.globalWebsites = $$('.thirds .third li');

    this.tableData = $$('.specs tr');
    //this.rows = this.tableData.all(by.tagName("tr"));
    this.cells = this.tableData.all(by.tagName('td:nth-child(2)'));
    this.arr= ['Skyhawk NVMe PCIe SSD',
        '1920GB, 3840GB',
        'Up to 1,500/Up to 1,170',
        'Up to 250/Up to 47',
        'PCIe Gen3, x4',
        'SFF 2.5-inch drive',
        '1 un-recoverable error in 1017 bits read',
        '2 million hours',
        '5 years'];
}
module.exports = new Slick();
