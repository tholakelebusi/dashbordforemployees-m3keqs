import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})

export class NewemployeeComponent implements OnInit {

  constructor() { }
   ngOnInit(): void {
  }


  employees = [{ myimage: 'https://scstylecaster.files.wordpress.com/2015/04/477973067.jpg', name: "Bongani", surname: "Smith", position: "Project Manager", age: 44},
  { myimage: 'https://www.ebony.com/wp-content/uploads/2016/07/businessman1_original_13747.jpg', name: "Pumlani", surname: "Fenter", position: "IT Analyst", age: 18 },
  { myimage: 'http://atlantablackstar.com/wp-content/uploads/2015/02/Black-businesswoman.jpg', name: "Bogiwe", surname: "Sibuyi", position: "Network Administrator", age: 28 },
  { myimage: 'https://get.pxhere.com/photo/man-person-people-meeting-corporate-professional-business-profession-speaker-elder-official-success-clergy-893119.jpg', name: "William", surname: "Rikhotso", position: "IT Coordinator", age: 45},
  { myimage: 'http://www.ljaassociates.org/img/james-etuusa.jpg', name: "Gift", surname: "MAzive", position: "Network Admin", age: 50},
  { myimage: 'https://simlinewsonline.files.wordpress.com/2019/06/img-20190613-wa0005-19041414821351052416.jpg?w=825', name: "Sabelo", surname: "Ncwane", position: "IT Analyst", age: 34},
  { myimage: 'https://dk9zyhfatdvcy.cloudfront.net/public/coaches/ce09b405-6d1e-4e48-9353-a2b2f4640f40/original', name: "James", surname: "Cossa", position: "Programmer", age: 33,},
  { myimage:'https://8020.legal/images/staff/m_allen.jpg',name: "Busi", surname: "khosa", position: "Secretary", age: 24},
  { myimage:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-on-White-Background_1.jpg?resize=750%2C486&ssl=1',name: "Nomusa", surname: "zwane", position: "Business Analyst", age: 22,},
{ myimage: 'http://images2.living.net/ImagesHomeProd1/TN/tln/member/photos/m11568221.jpg', name: "Smangele", surname: "Nhlongo", position: "Manager", age: 28 },

];

  names = '';
  surnames = '';
  positions = '';
  departments = '';
  ages = '';

  save()
  {
    
  }
}