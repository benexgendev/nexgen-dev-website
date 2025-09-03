export interface WorkshopRegistrationData {
  name: string;
  phone: string;
  details: string;
  isBTechStudent: boolean;
  collegeYear?: string;
  collegeName?: string;
}

export class WorkshopService {
  private static readonly WEBHOOK_URL = 'https://n8n.srv867726.hstgr.cloud/webhook/ed36a1b3-5ddc-48d1-9130-393db06bac62';

  static async registerForWorkshop(data: WorkshopRegistrationData): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(this.WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          whatsapp_number: data.phone,
          details: data.details,
          is_btech_student: data.isBTechStudent,
          college_year: data.collegeYear,
          college_name: data.collegeName,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return {
        success: true,
        message: 'Registration successful! We will contact you soon.',
      };
    } catch (error) {
      console.error('Workshop registration error:', error);
      return {
        success: false,
        message: 'Registration failed. Please try again.',
      };
    }
  }
}