import os
import cv2

def mirror_images_in_folder(folder_path):
    # Ensure the folder exists
    if not os.path.isdir(folder_path):
        print("Invalid folder path.")
        return
    
    # Create an output directory
    output_folder = os.path.join(folder_path, "mirrored")
    os.makedirs(output_folder, exist_ok=True)
    
    # Process each image in the folder
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        
        # Check if it's an image file
        if filename.lower().endswith((".png", ".jpg", ".jpeg", ".bmp", ".gif")):
            image = cv2.imread(file_path)
            if image is None:
                print(f"Skipping {filename}: Unable to read.")
                continue
            
            # Mirror the image
            mirrored_image = cv2.flip(image, 1)
            
            # Save the mirrored image
            new_filename = f"{os.path.splitext(filename)[0]}_mirrored{os.path.splitext(filename)[1]}"
            output_path = os.path.join(output_folder, new_filename)
            cv2.imwrite(output_path, mirrored_image)
            print(f"Saved: {output_path}")

if __name__ == "__main__":
    folder_path = input("Enter the folder path containing images: ")
    mirror_images_in_folder(folder_path)